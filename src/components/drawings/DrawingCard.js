import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import { deleteDrawing, setDrawingId } from "../../store/drawingSlice";
import { Link } from "react-router-dom";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";


const DrawingCard = ({ id, title, imgURL, imgJSON }) => {
    const dispatch = useDispatch();

    const handleEditStory = () => {
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
                <Link to='/createstory'>
                    <Icon onClick={handleEditStory} className='icon-small' icon="akar-icons:edit" />
                </Link>
                <Icon onClick={() => dispatch(deleteDrawing(id))} className='icon-small' icon="material-symbols:delete-outline" />
            </div>
        </div >
    )
}

export default DrawingCard