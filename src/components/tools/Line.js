import { fabric } from "fabric";

const Line = ({ canvas, onCancelDraw }) => {
    const addLine = () => {
        const line = new fabric.Line([50, 100, 200, 100], {
            stroke: 'black'
        });
        canvas.add(line);
        canvas.renderAll();
    };

    const handleAddLine = (canvas) => {
        addLine(canvas);
        onCancelDraw()
    }


    return (
        <div>
            <button onClick={handleAddLine}>Line</button>
        </div>
    )
}

export default Line;