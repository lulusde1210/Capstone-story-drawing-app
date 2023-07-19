import Rectangle from "./tools/Rectangle";
import Circle from "./tools/Circle";
import Triangle from "./tools/Triangle";
import Line from "./tools/Line";

const ToolBar = ({ canvas, onCancelDraw }) => {
    return (
        <div className="bg-red-100 p-2 rounded-md">
            <Rectangle canvas={canvas} onCancelDraw={onCancelDraw} />
            <Circle canvas={canvas} onCancelDraw={onCancelDraw} />
            <Triangle canvas={canvas} onCancelDraw={onCancelDraw} />
            <Line canvas={canvas} onCancelDraw={onCancelDraw} />
        </div>
    )
};

export default ToolBar;