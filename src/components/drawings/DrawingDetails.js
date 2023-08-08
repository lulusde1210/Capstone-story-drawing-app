import Loader from "../UI/Loader";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { useGetOneDrawingQuery } from "../../store/drawingsApiSlice";
import { setDrawing } from "../../store/drawingSlice";
import CommentSection from "../CommentSection";

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
            {!drawingIsLoading &&
                <div className="flex">
                    <div className="flex flex-col justify-center items-center gap-10 w-3/4">
                        <div className="w-full flex justify-center items-center px-10 gap-10">

                            <div>
                                <h1 className="h1">{drawing.title}</h1>
                            </div>
                            <div>
                                {userInfo && userInfo.user.id === drawing.artist._id && <Link to={`/alldrawings/${id}/edit`}>
                                    <Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                                </Link>}
                            </div>
                        </div>
                        <p className="text-center w-3/4">{drawing.description}</p>
                        <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
                        <div className="flex justify-center items-center gap-1 absolute">
                            <Icon className="text-lg cursor-pointer hover:scale-105" icon="fxemoji:redheart" />
                            <span>{drawing.likeCount}</span>
                        </div>
                    </div>
                    <div className="">
                        <Link to={`/users/${drawing.artist._id}`}>
                            <div className="flex gap-2">
                                <img src={drawing.artist.image} alt='author' className="h-14 w-14 object-cover rounded-full mb-8" />
                                <div className="text-xs flex flex-col">
                                    <span className="text-base">{drawing.artist.username}</span>
                                    <span>{drawing.date}</span>
                                </div>
                            </div>
                        </Link>
                        <CommentSection drawingId={drawing.id} />
                    </div>
                </div>}
        </>
    )
};

export default DrawingDetail;