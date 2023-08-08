import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const HomeView = () => {
    const { userInfo } = useSelector(state => state.auth)
    return (
        <div className="">
            <img src={'/header2.png'} className="h-full w-full object-cover absolute top-0 left-0 -z-50 " alt='background' />
            <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-xl border-none bg-white bg-opacity-30 backdrop-blur ">
                <h1 className="text-6xl">Every child is an artist.</h1>
                <h2 className="text-xl self-end">---Pablo Picasso</h2>
                {!userInfo &&
                    <div className="flex gap-5">
                        <Link to='/login'>
                            <button className="btn-secondary">Log In</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="btn-secondary">Register</button>
                        </Link>
                    </div>}
            </div>
        </div >

    )
};

export default HomeView;