import { fabric } from "fabric";

const Triangle = ({ canvas, onCancelDraw }) => {
    const addTriangle = () => {
        const triangle = new fabric.Triangle({
            width: 100,
            height: 120,
            fill: 'blue',
            left: 200,
            top: 200,
        });
        canvas.add(triangle);
        canvas.renderAll();
    };

    const handleAddTriangle = (canvas) => {
        addTriangle(canvas);
        onCancelDraw()
    }


    return (
        <div>
            <button onClick={handleAddTriangle}>Triangle</button>
        </div>
    )
}

export default Triangle;