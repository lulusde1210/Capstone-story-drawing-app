import DrawingCard from "./DrawingCard";
import { useSelector } from "react-redux";
import { useGetDrawingByUserIdQuery } from "../../store/drawingsApiSlice";
import Loader from "../UI/Loader";

const DrawingList = ({ uid }) => {
    const { data = [], isLoading } = useGetDrawingByUserIdQuery(uid)
    const drawings = data.drawings || []

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && <div className="flex flex-wrap justify-center  gap-10">
                {drawings.length === 0 && <h1 className="text-3xl">You don't have any drawing yet, go and create one!</h1>}
                {drawings.length > 0 &&
                    drawings.map((drawing) => (
                        <DrawingCard
                            key={drawing.id}
                            id={drawing.id}
                            title={drawing.title}
                            imgURL={drawing.imgURL}
                            imgJSON={drawing.imgJSON}
                            date={drawing.date}
                        />
                    ))
                }
            </div>}
        </>

    )
};

export default DrawingList;