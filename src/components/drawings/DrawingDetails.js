import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { useGetOneDrawingQuery } from "../../store/drawingsApiSlice";
import Loader from "../UI/Loader";
import { setDrawing } from "../../store/drawingSlice";

const DrawingDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.auth);
    const { data = {}, isLoading, isFetching, isError } = useGetOneDrawingQuery(id)
    const drawing = data.drawing || {}


    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(drawing.imgJSON))
        dispatch(saveCanvasURL(drawing.imgURL))
        dispatch(setDrawing(drawing))
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
                    </div>
                </div>
                <p className="text-center w-3/4">{drawing.description}</p>
                <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
            </div>}
        </>
    )
};

export default DrawingDetail;