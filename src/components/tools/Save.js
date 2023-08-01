import ToolButton from "../UI/ToolButton"
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addDrawing, editDrawing, setDrawingId } from "../../store/drawingSlice";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { VALIDATOR_REQUIRE } from "../util/validators";
import { useForm } from "../../hooks/form-hook";


const Save = ({ canvas }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const drawingId = useSelector((state) => state.drawings.drawingId)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const drawings = useSelector((state) => state.drawings.drawings)

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
    if (drawingId) {
        const drawing = drawings.find((drawing => (drawing.id === drawingId)))
        titleValue = drawing.title
        descriptionValue = drawing.description
        valid = true
    } else {
        titleValue = ''
        descriptionValue = ''
        valid = false
    };


    const handleSave = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });
        const dataJSON = JSON.stringify(canvas);

        console.log(dataURL)
        console.log(dataJSON)

        if (!drawingId) {
            dispatch(addDrawing(
                {
                    dataURL,
                    dataJSON,
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value
                }))
        } else {
            dispatch(editDrawing(
                {
                    drawingId,
                    dataURL,
                    dataJSON,
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value
                }))
        }
        dispatch(saveCanvasJSON(''))
        dispatch(saveCanvasURL(''))
        dispatch(setDrawingId(null))
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
            <div className="flex gap-5 justify-center mt-4">
                <Link to='/mylibrary'>
                    <button
                        type="submit"
                        className={formState.isValid ? 'btn-secondary' : 'btn-disabled'}
                        onClick={handleSave}
                        disabled={!formState.isValid}
                    >
                        Save Drawing
                    </button>
                </Link>
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