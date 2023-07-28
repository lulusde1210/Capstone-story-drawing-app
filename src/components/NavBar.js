import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { setDrawingId } from '../store/drawingSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const handleCreateDrawing = () => {
        dispatch(setDrawingId(null))
    }

    return (
        <nav className="w-screen fixed flex justify-between z-50 p-3 bg-inherit bg-orange-50">
            <NavLink className='text-3xl px-10' to='/'>WEBSITE NAME</NavLink >
            <div className='flex justify-center items-center gap-10'>
                <NavLink to='/' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="tabler:home" />
                    <span>Home</span>
                </NavLink >
                <NavLink to='/mylibrary' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="dashicons:format-gallery" />
                    <span>My Gallery</span>
                </NavLink>
            </div>
            <div className='flex justify-center items-center gap-5 px-10'>
                <NavLink
                    to='/createstory'
                    className="btn-primary flex justify-center items-center gap-1 text-base"
                >
                    <Icon onClick={handleCreateDrawing} className='text-xl' icon="tabler:brush" />
                    <span>Start Drawing</span>
                </NavLink>
                <NavLink to='/' className='text-base'> Sign in</NavLink >
                <NavLink to='/' className='text-base'> Log out</NavLink >

            </div>
        </nav >
    )
};

export default NavBar;