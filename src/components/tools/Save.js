import ToolButton from "../UI/ToolButton"
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { VALIDATOR_REQUIRE } from "../util/validators";
import { useForm } from "../../hooks/form-hook";
import { useCreateDrawingMutation, useUpdateDrawingMutation } from "../../store/drawingsApiSlice";
import { toast } from 'react-toastify';
import Loader from "../UI/Loader";
import { setDrawing } from "../../store/drawingSlice";

const Save = ({ canvas }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const drawing = useSelector((state) => state.drawings.drawing)
    const [createDrawing, { isLoading: createIsLoading }] = useCreateDrawingMutation();
    const [updateDrawing, { isLoading: updateIsLoading }] = useUpdateDrawingMutation();
    const { userInfo } = useSelector(state => state.auth);

    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)


    let titleValue;
    let descriptionValue;
    let valid
    if (drawing) {
        titleValue = drawing.title
        descriptionValue = drawing.description
        valid = true
    } else {
        titleValue = ''
        descriptionValue = ''
        valid = false
    };


    const handleSave = async (e) => {
        e.preventDefault();
        const dataJSON = JSON.stringify(canvas);

        const dataURL = canvas.toDataURL({
            format: 'jpeg',
            quality: 0.5,
        });

        if (!drawing) {
            try {
                const data = {
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value,
                    imgURL: dataURL,
                    imgJSON: dataJSON,
                    artist: userInfo.user.id
                };
                await createDrawing(data).unwrap();
                toast.success('Drawing created Successfull!');
                navigate(`/users/${userInfo.user.id}`)
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        } else {
            try {
                const data = {
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value,
                    imgURL: dataURL,
                    imgJSON: dataJSON,
                }
                await updateDrawing({
                    id: drawing.id,
                    patch: data
                }).unwrap();
                toast.success('Drawing updated Successfull!');
                navigate(`/users/${userInfo.user.id}`)
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
        dispatch(saveCanvasJSON(''))
        dispatch(saveCanvasURL(''))
        dispatch(setDrawing(null))
        closeModal()
    };

    const body =
        <form className="flex gap-5 flex-col">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                placeholder='Name for the art'
                errorText="You need a name for your art :)"
                onInput={inputHandler}
                defaultValue={titleValue}
                valid={valid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="What is your art about?"
                onInput={inputHandler}
                placeholder='Tell us something about your art...'
                defaultValue={descriptionValue}
                valid={valid}
            />
            {createIsLoading && <Loader />}
            {updateIsLoading && <Loader />}
            <div className="flex gap-5 justify-center mt-4">
                <button
                    type="submit"
                    className={formState.isValid ? 'btn-secondary' : 'btn-disabled'}
                    onClick={handleSave}
                    disabled={!formState.isValid}
                >
                    Save Drawing
                </button>
                <button
                    type="button"
                    className='btn-secondary'
                    onClick={closeModal}
                >
                    Keep Editting
                </button>
            </div>
        </form>



    return (
        <>
            <ToolButton >
                <button >
                    <Icon
                        onClick={openModal}
                        className='icon'
                        icon="icon-park:save" />
                </button>
            </ToolButton>
            <Modal
                dialogTitle='Well Done!'
                dialogContent='Tell me something about your Art!'
                isOpen={isOpen}
                closeModal={closeModal}
                body={body}
            />
        </>
    )
};

export default Save;