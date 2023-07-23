import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing, addObj } from "../../store/canvasSlice";


const Triangle = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const handleAddTriangle = () => {
        const triangle = new fabric.Triangle({
            originX: 'center',
            originY: 'center',
            width: 50,
            height: 70,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1,
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
        });
        dispatch(addObj(triangle));
        dispatch(disableDrawing());
    };

    return (
        <ToolButton>
            <button onClick={handleAddTriangle}>
                <Icon className='icon' icon="icon-park:triangle" />
            </button>
        </ToolButton>
    )
}

export default Triangle;