import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { addDrawing, editDrawing, setDrawingId } from "../../store/drawingSlice";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { Link } from "react-router-dom";
import { useState, useReducer, useCallback } from 'react'
import Input from "../UI/Input";
import { VALIDATOR_REQUIRE } from "../util/validators";
import Modal from "../UI/Modal";


const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const Save = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.canvas.canvas)
    const drawingId = useSelector((state) => state.drawings.drawingId)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)

    const [formState, dispatchForm] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatchForm({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

    const closeModal = () => {
        setIsOpen(false)
    };

    const openModal = () => {
        setIsOpen(true)
    };

    const handleSave = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });
        const dataJSON = JSON.stringify(canvas);

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
        <form className="flex flex-col">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="You need a title for your art :)"
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="What is your art about?"
                onInput={inputHandler}
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