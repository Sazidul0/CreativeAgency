import React from 'react';
import Banner from './Banner/Banner';
import ClientsFeedback from './ClientsFeedback';
import ContactUs from './ContactUs';
import OurPartners from './OurPartners';
import OurWorks from './OurWorks';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurPartners></OurPartners>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientsFeedback></ClientsFeedback>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;