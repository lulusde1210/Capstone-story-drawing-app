import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing, saveCanvasURL, saveCanvasSVG } from "../../store/canvasSlice";

const Save = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasSVG = useSelector((state) => state.canvas.canvasSVG)

    const dispatch = useDispatch();

    const handleSave = () => {
        console.log('handlesave.............')
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });

        const dataSVG = canvas.toSVG();

        dispatch(saveCanvasURL(dataURL))
        dispatch(saveCanvasSVG(dataSVG))

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