import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { deleteDrawing, setDrawingId } from "../../store/drawingSlice";
import Modal from "../UI/Modal";
import { useState } from "react";


const DrawingDetail = () => {
    const { id } = useParams();
    console.log('inside drawingdetail id', id)
    const drawings = useSelector((state) => state.drawings.drawings)
    const drawing = drawings.filter((drawing) => drawing.id === +id)[0]
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(drawing.imgJSON))
        dispatch(saveCanvasURL(drawing.imgURL))
        dispatch(setDrawingId(drawing.id))
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 w-3/4">
            <div className="flex justify-center items-center px-10 gap-10">
                <h1 className="h1">{drawing.title}</h1>
                <div className="flex self-end">
                    {auth.isLogin && <Link to={`/mylibrary/${id}/edit`}>
                        <Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                    </Link>}
                    {auth.isLogin && <Icon onClick={openModal} className='icon-small' icon="material-symbols:delete-outline" />}
                    <Modal
                        dialogTitle='Do you want to delete the drawing?'
                        isOpen={isOpen}
                        closeModal={closeModal}
                        body={
                            <div className="flex justify-center gap-5 mt-10">
                                <Link to='/mylibrary'>
                                    <button className='btn-secondary' onClick={() => dispatch(deleteDrawing(drawing.id))}>
                                        delete
                                    </button>
                                </Link>
                                <button className='btn-secondary' onClick={closeModal}>
                                    cancel
                                </button>
                            </div>
                        } />
                </div>
            </div>
            <p className="text-center w-3/4">{drawing.description}</p>
            <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
        </div>
    )
};

export default DrawingDetail;