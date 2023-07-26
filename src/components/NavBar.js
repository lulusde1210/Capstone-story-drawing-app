import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const NavBar = () => {
    return (
        <nav className="w-screen fixed flex justify-between z-50 p-5 mb-10 bg-inherit">
            <NavLink className='text-3xl px-10' to='/'>WEBSITE NAME</NavLink >
            <div className='flex justify-center items-center gap-10'>
                <NavLink to='/' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="tabler:home" />
                    <span>Home</span>
                </NavLink >
                <NavLink to='/mylibrary' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="ion:library-outline" />
                    <span>My Library</span>
                </NavLink>
            </div>
            <div className='flex justify-center items-center gap-5 px-10'>
                <NavLink
                    to='/createstory'
                    className="btn-primary flex justify-center items-center gap-1 text-base"
                >
                    <Icon className='text-xl' icon="zondicons:add-outline" />
                    <span>Create a story</span>
                </NavLink>
                <NavLink to='/' className='text-base'> Sign in</NavLink >
                <NavLink to='/' className='text-base'> Log out</NavLink >

            </div>
        </nav >
    )
};

export default NavBar;