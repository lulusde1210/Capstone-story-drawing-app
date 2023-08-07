import { useGetAllDrawingsQuery } from "../store/drawingsApiSlice";
import ViewCard from "./drawings/ViewCard";
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
                        <ViewCard
                            key={drawing.id}
                            id={drawing.id}
                            title={drawing.title}
                            imgURL={drawing.imgURL}
                            artist={drawing.artist}
                        />
                    ))
                }
            </div>}
        </>
    )
};

export default AllDrawings;