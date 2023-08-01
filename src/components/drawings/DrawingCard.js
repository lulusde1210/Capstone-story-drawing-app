import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import { deleteDrawing, setDrawingId } from "../../store/drawingSlice";
import { Link } from "react-router-dom";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import Modal from "../UI/Modal";
import { useState } from "react";

const DrawingCard = ({ id, title, imgURL, imgJSON }) => {
    const auth = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const dispatch = useDispatch();

    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(imgJSON))
        dispatch(saveCanvasURL(imgURL))
        dispatch(setDrawingId(id))
    };

    return (
        <div className="card">
            <Link to={`/mylibrary/${id}`}>
                <img className="w-full" src={imgURL} alt={title} />
                <div className="px-6 py-4">
                    <h1 className="h1">{title}</h1>
                    <p>here will be date created</p>
                </div>
            </Link>
            <div className="flex justify-between px-6 pt-4 pb-2 ">
                {auth.isLoggin && <Link to={`/mylibrary/${id}`}>
                    < Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                </Link>}
                {auth.isLoggin && <Icon onClick={openModal} className='icon-small' icon="material-symbols:delete-outline" />}
                <Modal
                    dialogTitle='Do you want to delete the drawing?'
                    isOpen={isOpen}
                    closeModal={closeModal}
                    body={
                        <div className="flex justify-center gap-5 mt-7">
                            <button className='btn-secondary' onClick={() => dispatch(deleteDrawing(id))}>
                                delete
                            </button>
                            <button className='btn-secondary' onClick={closeModal}>
                                cancel
                            </button>
                        </div>
                    } />
            </div>
        </div >
    )
}

export default DrawingCard