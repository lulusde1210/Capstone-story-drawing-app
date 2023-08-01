// import drawingCard from "./drawingCard";
import DrawingCard from "./drawings/DrawingCard";
import { useSelector } from "react-redux";

const AllDrawings = () => {
    const drawings = useSelector((state) => state.drawings.drawings)
    return (
        <div className="flex flex-wrap justify-center  gap-10">
            {drawings.length > 0 &&
                drawings.map((drawing) => (
                    <DrawingCard
                        key={drawing.id}
                        id={drawing.id}
                        title={drawing.title}
                        imgURL={drawing.imgURL}
                        imgJSON={drawing.imgJSON}
                    />
                ))
            }
        </div>
    )
};

export default AllDrawings;