import React, { useEffect, useState } from 'react';
import { ImCross } from "react-icons/im"

const OrderItem = ({ data, handleUpdate }) => {
    // console.log(data)
    const [orderData, setOrderData] = useState({});
    const { serviceName, number, price, customer, service, status, _id } = data;


    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [service])


    // console.log(data)
    if (data === {}) {
        return <div className='text-6xl text-center'>Please Buy something</div>
    }

    function handleDelete(id) {
        // console.log('clicked on', id)
        const sureDelete = window.confirm("Do You Want to Delete This item?")
        if (sureDelete) {

            fetch(`http://localhost:5000/services/${service}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }

    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <ImCross onClick={() => handleDelete(service)} />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    orderData?.img &&
                                    <img src={orderData.img} alt="product img" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{number}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
                <td>Red</td>
                <th>
                    <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "pending"}</button>
                </th>
            </tr>
        </tbody>
    );
};

export default OrderItem;