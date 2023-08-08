import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommentSection = ({ drawingId }) => {
    const { userInfo } = useSelector(state => state.auth);

    return (
        <div className="flex flex-col justify-start items-center ">

            {userInfo && <CommentForm drawingId={drawingId} />}
            {!userInfo &&
                <Link to='/login'>
                    <button className="btn-secondary mb-8">Log in to leave a comment! </button>
                </Link>}
            <CommentList drawingId={drawingId} />
        </div>
    )
}

export default CommentSection;