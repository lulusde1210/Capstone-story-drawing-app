import { fabric } from "fabric";

const Circle = ({ canvas, onCancelDraw }) => {
    const addCircle = () => {
        const circle = new fabric.Circle({
            radius: 100,
            fill: 'transparent',
            left: 200,
            top: 200,
            stroke: 'black',
            strokeWidth: 2,
        });
        canvas.add(circle);
        canvas.renderAll();
    };

    const handleAddCircle = (canvas) => {
        addCircle(canvas);
        onCancelDraw()
    }



    return (
        <div>
            <button onClick={handleAddCircle}>Circle</button>
        </div>
    )
}

export default Circle;