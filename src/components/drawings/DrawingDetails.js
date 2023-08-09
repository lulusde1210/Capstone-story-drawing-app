import Loader from "../UI/Loader";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { useGetOneDrawingQuery } from "../../store/drawingsApiSlice";
import { setDrawing } from "../../store/drawingSlice";
import CommentSection from "../CommentSection";
import format from "date-fns/format";

const DrawingDetail = () => {
    const { id } = useParams();

    const { userInfo } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { data: drawingData = {}, isLoading: drawingIsLoading } = useGetOneDrawingQuery(id)

    const drawing = drawingData.drawing || {}
    let date;

    if (drawing.date) {
        date = format(new Date(drawing.date), 'LLL dd, yyyy')
    }


    const handleEditDrawing = () => {
        dispatch(saveCanvasJSON(drawing.imgJSON))
        dispatch(saveCanvasURL(drawing.imgURL))
        dispatch(setDrawing(drawing))
    };

    return (
        <>
            {drawingIsLoading && <Loader />}
            {!drawingIsLoading &&
                <div className="flex flex-col pt-28 gap-5">
                    <div className="flex flex-col justify-center items-center gap-6 w-full">
                        <div className="flex justify-center items-center px-10 gap-10">
                            <div>
                                <h1 className="h1">{drawing.title}</h1>
                            </div>
                            <div>
                                {userInfo && userInfo.user.id === drawing.artist._id && <Link to={`/alldrawings/${id}/edit`}>
                                    <Icon onClick={handleEditDrawing} className='icon-small' icon="akar-icons:edit" />
                                </Link>}
                            </div>
                        </div>
                        <p className="text-center w-2/3">{drawing.description}</p>
                    </div>

                    <div className="flex flex-col lg:flex-row  gap-8">
                        <div className="min-w-96">
                            <img src={drawing.imgURL} alt={`${drawing.title}`} className="rounded-xl" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-start gap-14 items-center">
                                <Link to={`/users/${drawing.artist._id}`}>
                                    <div className="flex gap-2">
                                        <img src={drawing.artist.image} alt='author' className="h-14 w-14 object-cover rounded-full mb-8 border-2 border-gray-50" />
                                        <div className="text-xs flex flex-col">
                                            <span className="text-base">{drawing.artist.username}</span>
                                            <span>{date}</span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="flex justify-center items-end px-6 gap-5 text-xs">
                                    <div className="flex justify-center items-center gap-1">
                                        <Icon className="text-lg" icon="uil:comment" />
                                        <span>{drawing.comments.length}</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <Icon className="text-lg" icon="fxemoji:redheart" />
                                        <span>{drawing.likeCount}</span>
                                    </div>
                                </div>
                            </div>
                            <CommentSection drawingId={drawing.id} />
                        </div>
                    </div>

                </div>}
        </>
    )
};

export default DrawingDetail;