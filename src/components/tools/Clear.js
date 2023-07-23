import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing } from "../../store/canvasSlice";


const Clear = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const clearCanvas = () => {
        canvas.getObjects().forEach((obj) => {
            canvas.remove(obj);
        })
        canvas.renderAll()
        dispatch(disableDrawing());
    };

    return (
        <ToolButton>
            <Icon className='icon' onClick={clearCanvas} icon="icon-park:delete" />
        </ToolButton>
    )
}

export default Clear