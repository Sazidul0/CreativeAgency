import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password, name)
    }

    return (
        <div className='flex justify-center items-center my-20'>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form class="card-body" onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" class="input input-bordered" />


                        <p className='mt-5'>Already have an account? <Link to='/login' className=' text-primary link link-hover'>Please login</Link></p>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-dark" type='submit'>Login</button>
                    </div>

                    <SocialLogin></SocialLogin>
                </form>
            </div>

        </div>
    );
};

export default Register;