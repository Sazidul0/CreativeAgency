import React from 'react';

const service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className=''>
            <div class="card w-100 bg-base-100 shadow-xl">
                <figure class=" pt-10 w-1/2  mx-auto">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default service;