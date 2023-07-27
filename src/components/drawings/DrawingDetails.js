import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { deleteDrawing, setDrawingId } from "../../store/drawingSlice";


const DrawingDetail = () => {
    const { id } = useParams();
    const drawings = useSelector((state) => state.drawings.drawings)
    const drawing = drawings.filter((drawing) => drawing.id === +id)[0]
    const dispatch = useDispatch();

    const handleEditStory = () => {
        dispatch(saveCanvasJSON(drawing.imgJSON))
        dispatch(saveCanvasURL(drawing.imgURL))
        dispatch(setDrawingId(drawing.id))
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 m-10 w-3/4">
            <h1 className="h1">{drawing.title}</h1>
            <div className="flex justify-between px-6 pt-4 pb-2 ">
                <Link to='/createstory'>
                    <Icon onClick={handleEditStory} className='icon-small' icon="akar-icons:edit" />
                </Link>
                <Link to='/mylibrary'>
                    <Icon onClick={() => dispatch(deleteDrawing(drawing.id))} className='icon-small' icon="material-symbols:delete-outline" />
                </Link>
            </div>
            <p className="text-center w-3/4">{drawing.description}</p>
            <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
        </div>
    )
};

export default DrawingDetail;