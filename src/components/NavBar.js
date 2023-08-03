import { NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
// import MenuDropDown from './UI/MenuDropDown';
import { setDrawing } from '../store/drawingSlice';

const NavBar = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCreateDrawing = () => {
        dispatch(setDrawing(null))
    };

    const handleLogOut = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav className="w-screen fixed flex justify-between z-50 p-3 bg-inherit bg-orange-50">
            <NavLink className='text-3xl px-10' to='/'>WEBSITE NAME</NavLink >
            <div className='flex justify-center items-center gap-10'>
                <NavLink to='/' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="tabler:home" />
                    <span>Home</span>
                </NavLink >
                <NavLink to='/alldrawings' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="tabler:home" />
                    <span>All Arts</span>
                </NavLink >
                <NavLink to='/users' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="tabler:home" />
                    <span>Artists</span>
                </NavLink >
                {userInfo && <NavLink to='/mylibrary' className='flex justify-center items-center gap-1 text-base'>
                    <Icon className='text-xl' icon="dashicons:format-gallery" />
                    <span>My Gallery</span>
                </NavLink>}
            </div>
            <div className='flex justify-center items-center gap-5 px-10'>
                <NavLink
                    to='/createdrawing'
                    className="btn-primary flex justify-center items-center gap-1 text-base"
                >
                    <Icon onClick={handleCreateDrawing} className='text-xl' icon="tabler:brush" />
                    <span>Start Drawing</span>
                </NavLink>
                {!userInfo && <NavLink to='/login' className='text-base'> Log In</NavLink >}
                {userInfo && <button to='/' className='text-base' onClick={handleLogOut} > Log Out</button >}
                {userInfo && <span>{userInfo.user.username}</span>}
            </div>
        </nav >
    )
};

export default NavBar;