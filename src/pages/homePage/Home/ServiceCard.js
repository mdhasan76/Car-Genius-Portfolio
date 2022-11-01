import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-4">
            <figure><img src={img} alt="Shoes" className='h-[315px] w-full rounded-lg' /></figure>
            <div className="card-body py-2">
                <h2 className="card-title py-2">{title}</h2>
                <p className='text-orange-600 text-lg font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;