import { toast } from 'react-toastify';
import { useCreateCommentMutation } from '../../store/commentsApiSlice';
import { useState } from 'react';


const CommentForm = ({ drawingId }) => {
    const [createComment] = useCreateCommentMutation();
    const [comment, setComment] = useState();
    const formIsValid = comment && comment.length;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                body: comment,
                drawing: drawingId
            }
            await createComment(data).unwrap();
            setComment('')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    const handleChange = (e) => {
        setComment(e.target.value)
    }


    return (
        <form
            className='w-full flex flex-col gap-3 justify-center items-center mb-10'>
            <textarea
                className='form-input'
                rows={2}
                value={comment}
                onChange={handleChange}
            ></textarea>
            <button
                className={formIsValid ? 'btn-secondary' : 'btn-disabled'}
                onClick={handleSubmit}
                disabled={!formIsValid}>Post Comment</button>
        </form >
    )
};

export default CommentForm;