import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/AuthProvider';
import OrderItem from './OrderItem';

const Orders = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                // console.log(data)
            })
    }, [user?.email])
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
                    order.map(ord => <OrderItem key={ord._id} data={ord} />)
                }

            </table>
        </div>
    );
};

export default Orders;