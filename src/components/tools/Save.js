import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { addDrawing, editDrawing, setDrawingId } from "../../store/drawingSlice";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { Link } from "react-router-dom";
import InputField from "../UI/InputField";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Save = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [inputTitle, setInputTitle] = useState("")
    const [inputDescription, setInputDescription] = useState("")

    const canvas = useSelector((state) => state.canvas.canvas)
    const drawingId = useSelector((state) => state.drawings.drawingId)
    const dispatch = useDispatch();

    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)

    console.log('json', canvasJSON)
    console.log('url', canvasURL)

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
            dispatch(addDrawing({ dataURL, dataJSON, title: inputTitle, description: inputDescription }))
        } else {
            dispatch(editDrawing({ drawingId, dataURL, dataJSON, title: inputTitle, description: inputDescription }))
        }

        dispatch(saveCanvasJSON(''))
        dispatch(saveCanvasURL(''))
        dispatch(setDrawingId(null))
        closeModal()
    };

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
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <span>Well Done Little Picasso!</span>
                                        <br></br>
                                        <span>Tell me something about your art!</span>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form
                                            className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
                                        >
                                            <InputField
                                                type="text"
                                                label="Title"
                                                value={inputTitle}
                                                setValue={setInputTitle}
                                            />
                                            <InputField
                                                type="text"
                                                label="Description"
                                                value={inputDescription}
                                                setValue={setInputDescription}
                                            />
                                        </form>
                                    </div>

                                    <div className="flex gap-5 justify-center mt-4">
                                        <Link to='/mylibrary'>
                                            <button
                                                type="submit"
                                                className='btn-secondary'
                                                onClick={handleSave}
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>






    )
};

export default Save;