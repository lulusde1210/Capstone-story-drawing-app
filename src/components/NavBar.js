import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="w-screen flex justify-between z-50 mx-5">
            <NavLink className='px-10' to='/'> WEBSITE NAME</NavLink >
            <div className='flex justify-center items-center gap-10'>
                <NavLink to='/' > Home</NavLink >
                <NavLink to='/'>Create Story</NavLink>
                <NavLink to='/mylibrary'>My Library</NavLink>
            </div>
            <div className='flex justify-center items-center gap-5 px-10'>
                <NavLink to='/'> Log in /sign up</NavLink >
            </div>

        </nav >
    )
};

export default NavBar;