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

const ToolBar = () => {

    return (
        <div className="grid grid-cols-2 shadow-md py-5 gap-5 bg-red-100 rounded-md">
            <SelectArrow />
            <UndoRedo />
            <Rectangle />
            <Circle />
            <Triangle />
            <Line />
            <Text />
            <Stickers />
            <AddImage />
            <DeleteOne />
            <Clear />
        </div>
    )
};

export default ToolBar;