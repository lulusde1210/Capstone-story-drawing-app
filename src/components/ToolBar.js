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
import UndoRedo from "./tools/UndoRedo";

const ToolBar = ({ canvas }) => {

    const disableDrawing = () => {
        canvas.isDrawingMode = false
    };

    return (
        <div className="grid grid-cols-2 shadow-md py-5 gap-5 bg-red-100 rounded-md">
            <SelectArrow onCancelDraw={disableDrawing} />
            <UndoRedo canvas={canvas} />
            <Rectangle canvas={canvas} onCancelDraw={disableDrawing} />
            <Circle canvas={canvas} onCancelDraw={disableDrawing} />
            <Triangle canvas={canvas} onCancelDraw={disableDrawing} />
            <Line canvas={canvas} onCancelDraw={disableDrawing} />
            <Text canvas={canvas} onCancelDraw={disableDrawing} />
            <Stickers canvas={canvas} onCancelDraw={disableDrawing} />
            <AddImage canvas={canvas} onCancelDraw={disableDrawing} />
            <DeleteOne canvas={canvas} />
            <Clear canvas={canvas} onCancelDraw={disableDrawing} />
        </div>
    )
};

export default ToolBar;