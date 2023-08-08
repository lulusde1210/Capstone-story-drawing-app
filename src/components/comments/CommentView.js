import { useDeleteCommentMutation } from "../../store/commentsApiSlice";
import { toast } from 'react-toastify';
import Loader from "../UI/Loader";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const CommentView = ({ id, body, author }) => {
    const [deleteComment, { isLoading }] = useDeleteCommentMutation();
    const { userInfo } = useSelector(state => state.auth);

    const handleDeleteComment = async () => {
        try {
            await deleteComment(id).unwrap();
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <div className="flex flex-col">
                    <div className="border rounded-md p-3">
                        <div className="flex justify-between gap-3 items-center">
                            <div className="flex justify-center items-center">
                                <img src={author.image} alt='author'
                                    className="object-cover w-8 h-8 rounded-full 
                            border-2 border-sky-500  shadow-sky-400
                            "/>
                                <h3 className="text-xs font-bold">
                                    {author.username}
                                </h3>
                            </div>
                            {userInfo && userInfo.user.id === author.id && <button type='button' onClick={handleDeleteComment}>
                                <Icon icon="iwwa:delete" />
                            </button>}
                        </div>
                        <p className="text-gray-600 mt-2">
                            {body}
                        </p>
                    </div>
                </div>}
        </>
    )
}

export default CommentView