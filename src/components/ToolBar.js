import Rectangle from "./tools/Rectangle";
import Circle from "./tools/Circle";
import Triangle from "./tools/Triangle";
import Line from "./tools/Line";
import AddImage from "./tools/AddImage";
import Clear from "./tools/Clear";
import Text from "./tools/Text";
import Stickers from "./tools/Stickers";
import SelectArrow from "./tools/SelectArrow";
import DeleteOne from "./tools/DeleteOne";

const ToolBar = ({ canvas }) => {

    const disableDrawing = () => {
        canvas.isDrawingMode = false
    };

    return (
        <div className="shadow-md flex flex-col justify-center items-center gap-2  bg-red-100 p-5 rounded-md">
            <SelectArrow onCancelDraw={disableDrawing} />
            <Rectangle canvas={canvas} onCancelDraw={disableDrawing} />
            <Circle canvas={canvas} onCancelDraw={disableDrawing} />
            <Triangle canvas={canvas} onCancelDraw={disableDrawing} />
            <Line canvas={canvas} onCancelDraw={disableDrawing} />
            <Text canvas={canvas} onCancelDraw={disableDrawing} />
            <Stickers />
            <AddImage canvas={canvas} />
            <DeleteOne canvas={canvas} />
            <Clear canvas={canvas} />
        </div>
    )
};

export default ToolBar;