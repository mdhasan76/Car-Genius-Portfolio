import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch("https://carportfolio.vercel.app/services")
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    // console.log(services)
    return (
        <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 my-16'>
            {
                services.map(service => <ServiceCard key={service._id} service={service} />)
            }
        </div>
    );
};

export default Services;