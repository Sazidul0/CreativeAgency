import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourportfolio'>Our Portfolio</Link></li>
        <li><Link to='/ourteam'>Our Team</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
    </>

    return (
        <div>
            <div style={{ backgroundColor: '#FBD062' }} class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <img className='w-24 ml-2 lg:ml-32' src={logo} alt="Creative Agency" />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end mr-5">
                    <Link to='/login' className='btn btn-sm'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;