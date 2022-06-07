import React from 'react';
import carousel1 from '../../images/carousel-1.png'
import carousel2 from '../../images/carousel-2.png'
import carousel3 from '../../images/carousel-3.png'
import carousel4 from '../../images/carousel-4.png'
import carousel5 from '../../images/carousel-5.png'

const OurWorks = () => {
    return (
        <div style={{ backgroundColor: '#111430' }} className='mt-32 mb-20 py-20'>
            <h2 className='flex justify-center text-3xl font-bold mb-6 text-white'>Here are some of <span style={{ color: '#7AB259' }} className='ml-3'>our works</span></h2>

            <div class="carousel carousel-center flex justify-center p-4 space-x-4  rounded-box">
                <div class="carousel-item">
                    <img src={carousel1} class="rounded-box w-64" alt='' />
                </div>
                <div class="carousel-item">
                    <img src={carousel2} class="rounded-box w-64" alt='' />
                </div>
                <div class="carousel-item">
                    <img src={carousel3} class="rounded-box w-64" alt='' />
                </div>
                <div class="carousel-item">
                    <img src={carousel4} class="rounded-box w-64" alt='' />
                </div>
                <div class="carousel-item">
                    <img src={carousel5} class="rounded-box w-64" alt='' />
                </div>
            </div>


        </div>
    );
};

export default OurWorks;