import React, { useEffect, useState } from 'react';
import Service from './service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-32 mb-20'>
            <h2 className='flex justify-center text-3xl font-bold mb-6'>Provide awesome  <span style={{ color: '#7AB259' }} className='ml-3'> services</span></h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;