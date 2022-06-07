import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menuItems = <>
        <li className='text-primary font-bold'><Link to='/'>HOME</Link ></li>
        <li className='text-secondary  font-bold'><Link to='/'>ADVERTISERS</Link ></li>
        <li className='text-secondary  font-bold'><Link to='/'>PUBLISHERS</Link ></li>
        <li className='text-secondary  font-bold'><Link to='/'>INFLUENCERS</Link ></li>
        <li className='text-secondary  font-bold'><Link to='/'>AD FORMATS </Link ></li>
        <li className='text-secondary  font-bold'><Link to='/'>BLOG </Link ></li>
        <li className='text-secondary  font-bold'><Link to='/'>CONTACT US </Link ></li>

    </>
    return (
        <div class="navbar justify-between">
            <div class="">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        <li className='text-secondary  font-bold'><Link to='/'>LOGIN </Link ></li>
                        <li className='text-secondary  font-bold'><Link to='/' className='btn btn-primary rounded-full text-white'>SIGN UP </Link ></li>
                    </ul>
                </div>

            </div>
            <div style={{ width: "75%" }} class="navbar-start hidden lg:flex">
                <ul class="menu menu-horizontal p-0 ">
                    {menuItems}

                </ul>
            </div>
            <div style={{ width: "25%" }} class="navbar-end hidden lg:flex">
                <div class="btnbg rounded-full flex justify-center  items-center gap-3">

                    <Link to='/' className='btn btn-ghost ml-5'> Login</Link>


                    <Link to='/' className='btn btn-primary rounded-full px-10 signup'> Sign Up</Link>


                </div>
            </div>
        </div>
    );
};

export default Navbar;