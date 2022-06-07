import React from 'react';
import slack from '../../images/logos/slack.png'
import goolge from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import netfix from '../../images/logos/netflix.png'
import airbub from '../../images/logos/airbnb.png'

const OurPartners = () => {
    return (
        <div className='mt-20 lg:mt-32 mb-10 flex justify-center px-5'>
            <div className='grid grid-cols-5 gap-10 lg:gap-24 flex items-center'>
                <img className='w-28' src={slack} alt="" />
                <img className='w-28' src={goolge} alt="" />
                <img className='w-28' src={uber} alt="" />
                <img className='w-28' src={netfix} alt="" />
                <img className='w-28' src={airbub} alt="" />
            </div>
        </div>
    );
};

export default OurPartners;