import Input from '../UI/Input'
import { VALIDATOR_REQUIRE } from "../util/validators";
import { useForm } from "../../hooks/form-hook";
import { toast } from 'react-toastify';
import { useCreateCommentMutation } from '../../store/commentsApiSlice';

const CommentForm = ({ drawingId }) => {
    const [createComment] = useCreateCommentMutation();

    const [formState, inputHandler] = useForm({
        comment: {
            value: '',
            isValid: false
        },
    }, false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                body: formState.inputs.comment.value,
                drawing: drawingId
            }
            await createComment(data).unwrap();
            toast.success('Comment created Successfully!');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };


    return (
        <form
            className='w-full flex flex-col gap-3 justify-center items-center mb-10'>
            <Input
                id="comment"
                validators={[VALIDATOR_REQUIRE()]}
                placeholder='Type your comment'
                errorText="You can't leave an empty comment"
                onInput={inputHandler}
                defaultValue=''
                valid={false}
            />
            <button
                className={formState.isValid ? "btn-secondary" : "btn-disabled"}
                onClick={handleSubmit}
                disabled={!formState.isValid}>
                Post Comment
            </button>
        </form>
    )
};

export default CommentForm;