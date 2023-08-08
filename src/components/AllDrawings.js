import { useGetAllDrawingsQuery } from "../store/drawingsApiSlice";
import ViewCard from "./drawings/ViewCard";
import Loader from "./UI/Loader";

const AllDrawings = () => {
    const { data = [], isLoading } = useGetAllDrawingsQuery()
    const drawingsData = data.drawings || []

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && <div className="flex flex-wrap justify-center gap-5">
                {drawingsData.length > 0 &&
                    drawingsData.map((drawing) => (
                        <ViewCard
                            key={drawing.id}
                            id={drawing.id}
                            title={drawing.title}
                            imgURL={drawing.imgURL}
                            likeCount={drawing.likeCount}
                            artist={drawing.artist}
                            comments={drawing.comments}
                        />
                    ))
                }
            </div>}
        </>
    )
};

export default AllDrawings;