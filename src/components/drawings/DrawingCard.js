import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import Modal from "../UI/Modal";
import { useState } from "react";
import { useDeleteDrawingMutation } from "../../store/drawingsApiSlice";
import { toast } from 'react-toastify';
import { setDrawing } from "../../store/drawingSlice";
import Loader from "../UI/Loader";


const DrawingCard = ({ id, title, imgURL, imgJSON, date, artist }) => {
    const { userInfo } = useSelector(state => state.auth);
    const [deleteDrawing, { isLoading: deleteIsLoading }] = useDeleteDrawingMutation();
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const dispatch = useDispatch();

    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(imgJSON))
        dispatch(saveCanvasURL(imgURL))
        dispatch(setDrawing(id))
    };

    const handleDeleteDrawing = async () => {
        try {
            await deleteDrawing(id).unwrap();
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
        closeModal()
    };

    return (
        <div className="card">
            <Link to={`/mylibrary/${id}`}>
                <img className="w-full" src={imgURL} alt={title} />
                <div className="px-6 py-4">
                    <h1 className="h1">{title}</h1>
                    <p>{date}</p>
                    <p>By {artist}</p>
                </div>
            </Link>
            <div className="flex justify-between px-6 pt-4 pb-2 ">
                {userInfo && <Link to={`/mylibrary/${id}`}>
                    < Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                </Link>}
                {userInfo && <Icon onClick={openModal} className='icon-small' icon="material-symbols:delete-outline" />}
                <Modal
                    dialogTitle='Do you want to delete the drawing?'
                    isOpen={isOpen}
                    closeModal={closeModal}
                    body={
                        <div>
                            {deleteIsLoading && <Loader />}
                            <div className="flex justify-center gap-5 mt-7">
                                <button className='btn-secondary' onClick={handleDeleteDrawing}>
                                    delete
                                </button>
                                <button className='btn-secondary' onClick={closeModal}>
                                    cancel
                                </button>
                            </div>
                        </div>
                    } />
            </div>
        </div >
    )
}

export default DrawingCard