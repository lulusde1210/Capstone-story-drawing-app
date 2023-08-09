import CommentView from './CommentView';
import Loader from '../UI/Loader';
import { useGetCommentsByDrawingIdQuery } from '../../store/commentsApiSlice';

const CommentList = ({ drawingId }) => {
    const { data = [], isLoading } = useGetCommentsByDrawingIdQuery(drawingId)
    const comments = data.comments;

    return (
        <div className='w-full bg-red-50 rounded-xl p-2 flex flex-col gap-2'>
            {isLoading && <Loader />}
            {comments && comments.length === 0 &&
                <p className='text-center text-gray-400'>Be the first to leave a comment!</p>}
            {!isLoading && comments.map(comment =>
                <CommentView
                    key={comment._id}
                    id={comment._id}
                    body={comment.body}
                    author={comment.author}
                />
            )}
        </div>
    )
}

export default CommentList