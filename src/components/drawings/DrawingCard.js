import Modal from "../UI/Modal";
import Loader from "../UI/Loader";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { useState } from "react";
import { useDeleteDrawingMutation, useUpdateDrawingLikeCountMutation } from "../../store/drawingsApiSlice";
import { toast } from 'react-toastify';
import { setDrawing } from "../../store/drawingSlice";


const DrawingCard = ({ id, title, imgURL, imgJSON, likeCount, artist, comments }) => {
    const { userInfo } = useSelector(state => state.auth);
    const [deleteDrawing, { isLoading: deleteIsLoading }] = useDeleteDrawingMutation();
    const [updateDrawingLikeCount] = useUpdateDrawingLikeCountMutation();
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


    const handleLike = async () => {
        try {
            await updateDrawingLikeCount({ id }).unwrap()
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <div className="card relative">
            <Link to={`/alldrawings/${id}`}>
                <img className="w-96" src={imgURL} alt={title} />
            </Link>
            <div className="flex justify-between items-center">
                <div className="px-6 py-4 flex justify-between">
                    <p className="text-base">{title}</p>
                </div>
                <div className="flex justify-center items-end px-6 gap-5 text-xs">
                    <div className="flex justify-center items-center gap-1">
                        <Icon className="text-lg" icon="uil:comment" />
                        <span>{comments.length}</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <Icon className="text-lg cursor-pointer hover:scale-105" icon="fxemoji:redheart" onClick={handleLike} />
                        <span>{likeCount}</span>
                    </div>
                </div>
            </div>
            {userInfo && userInfo.user.id === artist._id &&
                <div className="w-full flex justify-between p-1 absolute top-0 text-gray-500">
                    <Link to={`/alldrawings/${id}`}>
                        < Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                    </Link>
                    <Icon onClick={openModal} className='icon-small' icon="material-symbols:delete-outline" />
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
                </div>}

        </div >
    )
}

export default DrawingCard