import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const HomeView = () => {
    const auth = useSelector(state => state.auth)
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1>This is home view welcome page</h1>

            {!auth.isLogin && <div className="flex gap-5">
                <Link to='/login'>
                    <button className="btn-secondary">Log In</button>
                </Link>
                <Link to='/signup'>
                    <button className="btn-secondary">Register</button>
                </Link>
            </div>}
        </div>
    )
};

export default HomeView;