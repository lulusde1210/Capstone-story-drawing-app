import { useSelector } from "react-redux"

const Profile = () => {

    const { userInfo } = useSelector(state => state.auth);

    return (
        <div>
            <h1>username: {userInfo.user.username}</h1>
            <img src={userInfo.user.image} alt='profile' />
        </div>
    )
}

export default Profile