import DrawingCard from "./DrawingCard";
import { useGetDrawingByUserIdQuery } from "../../store/drawingsApiSlice";
import Loader from "../UI/Loader";
import { useSelector } from "react-redux";

const DrawingList = ({ uid }) => {
    const { data = [], isLoading } = useGetDrawingByUserIdQuery(uid)
    const drawings = data.drawings || []
    const { userInfo } = useSelector((state) => state.auth);


    if (isLoading) return <Loader />

    return (
        <div className="flex flex-wrap justify-center items-center md:justify-start gap-5">
            {drawings.length === 0 && userInfo && userInfo.user.id === uid &&
                <div className="h-full flex justify-center items-center">
                    <h1 className="text-3xl">You don't have any drawing yet, go and create one!</h1>
                </div>}

            {drawings.length === 0 && userInfo && userInfo.user.id !== uid &&
                <div className="h-full flex justify-center items-center">
                    <h1 className="text-3xl">This artist doesn't have any art created yet...</h1>
                </div>}

            {drawings.length === 0 && !userInfo &&
                <div className="h-full flex justify-center items-center">
                    <h1 className="text-3xl">This artist doesn't have any art created yet...</h1>
                </div>}

            {drawings.length > 0 &&
                drawings.map((drawing) => (
                    <DrawingCard
                        key={drawing.id}
                        id={drawing.id}
                        title={drawing.title}
                        imgURL={drawing.imgURL}
                        imgJSON={drawing.imgJSON}
                        likeCount={drawing.likeCount}
                        artist={drawing.artist}
                        comments={drawing.comments}
                    />
                ))
            }
        </div>

    )
};

export default DrawingList;