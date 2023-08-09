import { useGetOneUserQuery } from "../store/usersApiSlice";
import { useParams } from "react-router-dom";
import DrawingList from "./drawings/DrawingList";
import Loader from "./UI/Loader";
import Follow from "./user/Follow";
import { useFollowMutation, useUnfollowMutation } from "../store/usersApiSlice";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const UserView = () => {
    const { id } = useParams();
    const { data: userData = {}, isLoading } = useGetOneUserQuery(id)
    const { userInfo } = useSelector(state => state.auth);
    const [follow] = useFollowMutation();
    const [unfollow] = useUnfollowMutation();
    const [isFollowing, setIsFollowing] = useState(false)

    const user = useMemo(() => userData.user || {}, [userData.user])

    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            const found = user.followers.find(follower => follower.id === userInfo?.user?.id)
            if (found) {
                setIsFollowing(true)
            } else (
                setIsFollowing(false)
            )
        }
    }, [isFollowing, user, userInfo])

    const handleFollow = async () => {
        try {
            await follow({ followId: id }).unwrap()
            toast.success('Follow Successfull!');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    const handleUnfollow = async () => {
        try {
            await unfollow({ followId: id }).unwrap()
            toast.success('Unfollow Successfull!');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <div className="w-full mt-28 flex">
                    <div
                        className="lg:w-1/4 md:w-1/2 h-full flex flex-col justify-start items-center gap-8 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg">
                        <img className="h-32 w-32 object-cover rounded-full border-4 border-gray-50 " src={user.image} alt="profile" />
                        <div className="flex flex-col gap-3 justify-center items-center text-center space-y-2 sm:text-left">
                            <p className="text-lg text-black font-semibold">
                                {user.username}
                            </p>

                            <div className="text-xs flex gap-5">
                                <div className="w-20 flex flex-col justify-center items-center">
                                    <p>{user.drawings.length}</p>
                                    <p>Arts</p>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p>{user.followers.length}</p>
                                    <p>Followers</p>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p>{user.following.length}</p>
                                    <p>Following</p>
                                </div>
                            </div>

                            {userInfo && userInfo.user.id !== id &&
                                <div>
                                    {!isFollowing && <button onClick={handleFollow} className="btn-small">Follow</button>}
                                    {isFollowing && <button onClick={handleUnfollow} className="btn-small">Unfollow</button>}
                                </div>}
                            {userInfo && userInfo.user.id === id &&
                                <Link to='/editprofile'>
                                    <button type='button' className="btn-secondary">Edit Profile</button>
                                </Link>
                            }
                        </div>
                        <Follow user={user} />
                    </div>
                    <div className="lg:w-3/4 md:w-1/2 h-full ">
                        <DrawingList uid={user.id} />
                    </div>
                </div>}
        </>
    )
}

export default UserView