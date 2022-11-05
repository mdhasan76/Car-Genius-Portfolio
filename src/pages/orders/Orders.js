import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/AuthProvider';
import OrderItem from './OrderItem';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`https://carportfolio.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('token')
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrder(data)
            })
    }, [user?.email, logOut])

    const handleUpdate = (id) => {
        fetch(`https://carportfolio.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: 'aproved' })
        })

            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    const remaining = order.filter(ord => ord._id !== id);
                    const approvied = order.find(ord => ord._id === id);
                    approvied.status = "approved";
                    const newOrders = [approvied, ...remaining];
                    setOrder(newOrders)
                }

            })
        console.log(order)
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    order.map(ord => <OrderItem key={ord._id} handleUpdate={handleUpdate} data={ord} />)
                }

            </table>
        </div>
    );
};

export default Orders;