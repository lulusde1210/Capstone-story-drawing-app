import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useDispatch } from "react-redux"
import { disableDrawing, clearCanvas } from "../../store/canvasSlice";


const Clear = () => {
    const dispatch = useDispatch();

    const handleClearCanvas = () => {
        dispatch(clearCanvas())
        dispatch(disableDrawing());
    };

    return (
        <ToolButton>
            <Icon className='icon' onClick={handleClearCanvas} icon="icon-park:delete" />
        </ToolButton>
    )
}

export default Clear