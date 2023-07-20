import Rectangle from "./tools/Rectangle";
import Circle from "./tools/Circle";
import Triangle from "./tools/Triangle";
import Line from "./tools/Line";
import AddImage from "./tools/AddImage";
import Clear from "./tools/Clear";
import Text from "./tools/Text";
import Stickers from "./tools/Stickers";

const ToolBar = ({ canvas, onCancelDraw, onClear }) => {
    return (
        <div className="shadow-md flex flex-col justify-center items-center gap-2  bg-red-100 p-5 rounded-md">
            <Rectangle canvas={canvas} onCancelDraw={onCancelDraw} />
            <Circle canvas={canvas} onCancelDraw={onCancelDraw} />
            <Triangle canvas={canvas} onCancelDraw={onCancelDraw} />
            <Line canvas={canvas} onCancelDraw={onCancelDraw} />
            <Text canvas={canvas} onCancelDraw={onCancelDraw} />
            <Stickers />
            <AddImage canvas={canvas} />
            <Clear onClear={onClear} />
        </div>
    )
};

export default ToolBar;