import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';
import { useDispatch } from "react-redux"
import { disableDrawing, addObj } from "../../store/canvasSlice";


const Line = () => {
    const dispatch = useDispatch();

    const handleAddLine = () => {
        const line = new fabric.Line([50, 100, 200, 100], {
            stroke: 'black'
        });
        dispatch(addObj(line));
        dispatch(disableDrawing());
    };

    return (
        <ToolButton className='flex justify-center items-center'>
            <button onClick={handleAddLine}>
                <Icon className='icon' icon="pepicons-print:line-x" />
            </button>
        </ToolButton>
    )
}

export default Line;