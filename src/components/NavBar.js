import { NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../store/usersApiSlice';
import { logout } from '../store/authSlice';
import { resetDrawing } from '../store/drawingSlice';
import { saveCanvasJSON, saveCanvasURL } from '../store/canvasSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import MenuDropDown from './UI/MenuDropDown';


const NavBar = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const [logoutApiCall] = useLogoutMutation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleCreateDrawing = () => {
        dispatch(resetDrawing())
        dispatch(saveCanvasJSON(''))
        dispatch(saveCanvasURL(''))
    };

    const handleLogOut = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };


    return (
        <header
            className="w-full fixed flex justify-between py-3 items-center z-50
             bg-white bg-opacity-30 backdrop-blur"
        >
            <Link to="/" className="flex gap-2 items-center px-4">
                <Icon icon="emojione-monotone:artist-palette" className="text-2xl" />
                <span className="md:text-xl sm:text-sm font-bold">Little Picasso</span>
            </Link>
            <nav className="hidden lg:block text-base">
                <ul className="flex gap-10 font-semibold">
                    <NavLink to='/' className="flex items-center gap-2">
                        <Icon icon="tabler:home" className="text-lg inline-flex" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to='/alldrawings' className="flex items-center gap-2">
                        <Icon icon="ion:images-outline" className="text-lg inline-flex" />
                        <span>Explore Arts</span>
                    </NavLink>
                    {userInfo &&
                        <NavLink to={`/users/${userInfo.user.id}`} className="flex items-center gap-2">
                            <Icon icon="fa6-regular:images" className="text-lg inline-flex" />
                            <span>My Gallery</span>
                        </NavLink>}
                </ul>
            </nav>
            <div className="flex justify-center items-center gap-3 px-4">
                <Link
                    to='/createdrawing'
                    className="hidden sm:flex btn-primary justify-center items-center gap-1 text-base"
                    onClick={handleCreateDrawing}
                >
                    <Icon className='text-xl' icon="tabler:brush" />
                    <span>Start Drawing</span>
                </Link>

                <Link
                    to='/createdrawing'
                    className="block sm:hidden btn-primary justify-center items-center gap-1 text-base "
                    onClick={handleCreateDrawing}
                >
                    <Icon className='text-xl' icon="tabler:brush" />
                </Link>
                <MenuDropDown handleClickLogout={handleLogOut} />
            </div>
        </header>
    )
};

export default NavBar;