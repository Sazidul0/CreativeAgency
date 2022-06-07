import React from 'react';
import HomeButton from '../Shared/HomeButton';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }} className='mt-20 pb-10 pt-5'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Let us handle your project, professionally.</h1>
                        <p class="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="Your Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Your name / company’s name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea placeholder='Your message' name="message" id="" cols="10" rows="10" class="border p-4 rounded-lg"></textarea>
                            </div>
                            <div class=" mt-6">
                                <HomeButton value='Send'></HomeButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;