import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing, saveCanvasURL, saveCanvasJSON } from "../../store/canvasSlice";

const Save = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)

    const dispatch = useDispatch();

    const handleSave = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });

        const dataJSON = JSON.stringify(canvas);

        dispatch(saveCanvasURL(dataURL))
        dispatch(saveCanvasJSON(dataJSON))

    };

    return (
        <ToolButton >
            <button onClick={handleSave}>
                <Icon className='icon' icon="icon-park:save" />
            </button>
        </ToolButton>
    )
};

export default Save;