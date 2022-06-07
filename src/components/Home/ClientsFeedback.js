import React from 'react';

const ClientsFeedback = () => {
    return (
        <div className='mt-40 mb-40'>
            <h2 className='flex justify-center text-3xl font-bold mb-6'>Clients <span style={{ color: '#7AB259' }} className='ml-3'>Feedback</span></h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
                <div className='card card-compact w-100 bg-base-100 shadow-xl p-5'>
                    <div className='flex items-center'>
                        <div class="avatar">
                            <div class="w-20 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h3 className='text-xl font-semibold'>Nash Patrik</h3>
                            <h4 className='font-semibold'>CEO, Manpol</h4>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                </div>

                <div className='card card-compact w-100 bg-base-100 shadow-xl p-5'>
                    <div className='flex items-center'>
                        <div class="avatar">
                            <div class="w-20 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h3 className='text-xl font-semibold'>Nash Patrik</h3>
                            <h4 className='font-semibold'>CEO, Manpol</h4>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                </div>

                <div className='card card-compact w-100 bg-base-100 shadow-xl p-5'>
                    <div className='flex items-center'>
                        <div class="avatar">
                            <div class="w-20 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h3 className='text-xl font-semibold'>Nash Patrik</h3>
                            <h4 className='font-semibold'>CEO, Manpol</h4>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedback;