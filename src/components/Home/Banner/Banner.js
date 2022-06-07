import React from 'react';
import './Banner.css'
import bannerImg from '../../../images/logos/Frame.png'

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }} className='banner-top-container'>
            <div class="hero pb-44">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={bannerImg} class="w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-44 text-container'>
                        <h1 class="text-5xl font-bold">Let’s Grow Your
                            Brand To The
                            Next Level</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-dark">Hire us</button>
                    </div>
                </div>

            </div>
            <div className='banner-bottom'>
                <svg className='svg-item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,320L80,314.7C160,309,320,299,480,272C640,245,800,203,960,176C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;