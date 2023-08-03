import { useGetOneUserQuery } from "../store/usersApiSlice";
import { useParams } from "react-router-dom";
import DrawingList from "./drawings/DrawingList";
import Loader from "./UI/Loader";

const UserView = () => {
    const { id } = useParams();
    const { data: userData = {}, isLoading } = useGetOneUserQuery(id)
    const user = userData.user || {}

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <div className="flex justify-start flex-col">
                    <div
                        className="flex gap-8 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg">
                        <img className="h-32 w-32 object-cover rounded-full" src={user.image} alt="profile" />
                        <div className="flex flex-col justify-center items-center text-center space-y-2 sm:text-left">
                            <p className="text-lg text-black font-semibold">
                                {user.username}
                            </p>
                            <p className="text-slate-500 font-medium">
                                Artist
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-10 py-8 px-8">
                        <DrawingList uid={user.id} />
                    </div>
                </div>}
        </>
    )
}

export default UserView