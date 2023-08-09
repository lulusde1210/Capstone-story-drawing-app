import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import DrawingList from "../drawings/DrawingList";
const Profile = () => {

    const { userInfo } = useSelector(state => state.auth);

    return (
        <>
            <div className="flex justify-start flex-col gap-10">
                <div
                    className="flex gap-8 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg">
                    <img className="h-32 w-32 object-cover rounded-full" src={userInfo.user.image} alt="profile" />
                    <div className="flex flex-col justify-center items-center text-center space-y-2 sm:text-left">
                        <p className="text-lg text-black font-semibold">
                            {userInfo.user.username}
                        </p>
                        <p className="text-slate-500 font-medium">
                            Artist
                        </p>
                        <Link to='/editprofile'>
                            <button type='button' className="btn-secondary">Edit Profile</button>
                        </Link>
                    </div>
                </div>
                <DrawingList uid={userInfo.user.id} />

            </div>
        </>
    )
}

export default Profile