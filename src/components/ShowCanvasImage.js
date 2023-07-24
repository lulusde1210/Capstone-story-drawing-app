import { useSelector } from "react-redux";
import { fabric } from "fabric";

const ShowCanvasImage = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasSVG = useSelector((state) => state.canvas.canvasSVG)

    const handleEditCanvas = () => {
        fabric.loadSVGFromString(canvasSVG, (objects) => {
            canvas.add(...objects)
            canvas.renderAll()
        })
    };

    return (
        <div>
            <button onClick={handleEditCanvas}>edit</button>
            <br></br>
            <button>delete</button>
            <img width='300px' src={canvasURL} alt='canvas-img' />
        </div>
    )
}

export default ShowCanvasImage