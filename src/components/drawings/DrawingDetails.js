import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import Modal from "../UI/Modal";
import { useState } from "react";
import { useGetOneDrawingQuery, useDeleteDrawingMutation } from "../../store/drawingsApiSlice";
import Loader from "../UI/Loader";
import { toast } from 'react-toastify';
import { setDrawing } from "../../store/drawingSlice";

const DrawingDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.auth);
    const [deleteDrawing, { isLoading: deleteIsLoading }] = useDeleteDrawingMutation();

    const { data = {}, isLoading, isFetching, isError } = useGetOneDrawingQuery(id)
    const drawing = data.drawing || {}


    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(drawing.imgJSON))
        dispatch(saveCanvasURL(drawing.imgURL))
        dispatch(setDrawing(drawing))
    };

    const handleDeleteDrawing = async () => {
        try {
            await deleteDrawing(drawing.id).unwrap();
            navigate('/mylibrary')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && <div className="flex flex-col justify-center items-center gap-10 w-3/4">
                <div className="flex justify-center items-center px-10 gap-10">
                    <h1 className="h1">{drawing.title}</h1>
                    <div className="flex self-end">
                        {userInfo && <Link to={`/mylibrary/${id}/edit`}>
                            <Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                        </Link>}
                        {userInfo && <Icon onClick={openModal} className='icon-small' icon="material-symbols:delete-outline" />}
                        <Modal
                            dialogTitle='Do you want to delete the drawing?'
                            isOpen={isOpen}
                            closeModal={closeModal}
                            body={
                                <div className="flex justify-center gap-5 mt-10">
                                    <button className='btn-secondary' onClick={handleDeleteDrawing}>
                                        delete
                                    </button>
                                    <button className='btn-secondary' onClick={closeModal}>
                                        cancel
                                    </button>
                                </div>
                            } />
                    </div>
                </div>
                <p className="text-center w-3/4">{drawing.description}</p>
                <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
            </div>}
        </>
    )
};

export default DrawingDetail;