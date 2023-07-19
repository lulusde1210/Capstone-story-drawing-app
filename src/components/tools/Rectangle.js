import { fabric } from "fabric";

const Rectangle = ({ canvas, onCancelDraw }) => {
    const addRec = () => {
        const rect = new fabric.Rect({
            left: 200,
            top: 200,
            height: 150,
            width: 100,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2
        });
        canvas.add(rect);
        canvas.renderAll();
    }

    const handleAddRec = (canvas) => {
        addRec(canvas);
        onCancelDraw()
    }

    return (
        <div>
            <button onClick={handleAddRec}>Rectangle</button>
        </div>
    )
}

export default Rectangle