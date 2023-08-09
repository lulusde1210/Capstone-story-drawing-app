import DrawingCard from "./DrawingCard";
import { useGetDrawingByUserIdQuery } from "../../store/drawingsApiSlice";
import Loader from "../UI/Loader";
import { useSelector } from "react-redux";

const DrawingList = ({ uid }) => {
    const { data = [], isLoading } = useGetDrawingByUserIdQuery(uid)
    const drawings = data.drawings || []
    const { userInfo } = useSelector((state) => state.auth);

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <div className="flex flex-wrap justify-start gap-5">
                    {drawings.length === 0 && userInfo && userInfo.user.id === uid &&
                        <h1 className="text-3xl">You don't have any drawing yet, go and create one!</h1>}

                    {drawings.length === 0 && userInfo && userInfo.user.id !== uid &&
                        <h1 className="text-3xl">This artist doesn't have any art created yet...</h1>}

                    {drawings.length === 0 && !userInfo &&
                        <h1 className="text-3xl">This artist doesn't have any art created yet...</h1>}

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
            }
        </>

    )
};

export default DrawingList;