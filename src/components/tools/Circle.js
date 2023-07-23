import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing, addObj } from "../../store/canvasSlice";

const Circle = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const handleAddCircle = () => {
        const circle = new fabric.Circle({
            originX: 'center',
            originY: 'center',
            radius: 50,
            fill: 'transparent',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
            stroke: 'black',
            strokeWidth: 1,
        });
        dispatch(addObj(circle))
        dispatch(disableDrawing())
    };

    return (
        <ToolButton>
            <button onClick={handleAddCircle}>
                <Icon className='icon' icon="octicon:circle-16" />
            </button>
        </ToolButton>
    )
}

export default Circle;