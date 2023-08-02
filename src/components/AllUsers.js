import { useGetAllUsersQuery } from "../store/usersApiSlice";
import Loader from "./UI/Loader";


const AllUsers = () => {
    const { data = {}, isLoading } = useGetAllUsersQuery()
    const users = data.users || []

    return (
        <div>
            <h1>All Artists</h1>
            {isLoading && <Loader />}
            {users.map((user, idx) => <h2 key={idx} >{user.username}</h2>)}
        </div>
    )
}

export default AllUsers