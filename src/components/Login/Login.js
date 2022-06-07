import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)
    }

    return (
        <div className='flex justify-center items-center my-20'>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form class="card-body" onSubmit={handleSubmit}>
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

                        <p>Forgot password? <button className='mt-5 text-primary link link-hover'>Reset Password</button></p>
                        <p className='mt-3'>New to Creative Agency? <Link to="/register" className=' text-primary link link-hover'>Register</Link></p>
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

export default Login;