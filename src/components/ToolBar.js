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
import Reset from "./tools/Reset";

const ToolBar = ({ canvas }) => {

    return (
        <div className="grid grid-cols-2 shadow-md py-5 gap-5 bg-red-100 rounded-md">
            <SelectArrow canvas={canvas} />
            <UndoRedo canvas={canvas} />
            <Rectangle canvas={canvas} />
            <Circle canvas={canvas} />
            <Triangle canvas={canvas} />
            <Line canvas={canvas} />
            <Text canvas={canvas} />
            <AddImage canvas={canvas} />
            <Stickers canvas={canvas} />
            <DeleteOne canvas={canvas} />
            <Clear canvas={canvas} />
            <Reset canvas={canvas} />


        </div>
    )
};

export default ToolBar;