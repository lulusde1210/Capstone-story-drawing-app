import Loader from "../UI/Loader";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { useGetOneDrawingQuery } from "../../store/drawingsApiSlice";
import { setDrawing } from "../../store/drawingSlice";

const DrawingDetail = () => {
    const { id } = useParams();

    const { userInfo } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { data: drawingData = {}, isLoading: drawingIsLoading } = useGetOneDrawingQuery(id)

    const drawing = drawingData.drawing || {}

    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(drawing.imgJSON))
        dispatch(saveCanvasURL(drawing.imgURL))
        dispatch(setDrawing(drawing))
    };

    return (
        <>
            {drawingIsLoading && <Loader />}
            {!drawingIsLoading && <div className="flex flex-col justify-center items-center gap-10 w-3/4">
                <div className="flex justify-center items-center px-10 gap-10">
                    <Link to={`/users/${drawing.artist._id}`}>
                        <img src={drawing.artist.image} alt='author' className="h-14 w-14 object-cover rounded-full" />
                    </Link>
                    <h1 className="h1">{drawing.title}</h1>
                    <div className="flex self-end">
                        {userInfo && userInfo.user.id === drawing.artist._id && <Link to={`/alldrawings/${id}/edit`}>
                            <Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                        </Link>}
                    </div>
                </div>
                <p className="text-center w-3/4">{drawing.description}</p>
                <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
                <p>{drawing.date}</p>
            </div>}
        </>
    )
};

export default DrawingDetail;