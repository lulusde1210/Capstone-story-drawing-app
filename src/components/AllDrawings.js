// import drawingCard from "./drawingCard";
import DrawingCard from "./drawings/DrawingCard";
import { useGetAllDrawingsQuery } from "../store/drawingsApiSlice";
import Loader from "./UI/Loader";

const AllDrawings = () => {
    const { data = [], isLoading } = useGetAllDrawingsQuery()
    const drawingsData = data.drawings || []

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && <div className="flex flex-wrap justify-center  gap-10">
                {drawingsData.length > 0 &&
                    drawingsData.map((drawing) => (
                        <DrawingCard
                            key={drawing.id}
                            id={drawing.id}
                            title={drawing.title}
                            imgURL={drawing.imgURL}
                            imgJSON={drawing.imgJSON}
                            artist={drawing.artist}
                        />
                    ))
                }
            </div>}
        </>
    )
};

export default AllDrawings;