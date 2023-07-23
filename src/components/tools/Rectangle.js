import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing, addObj } from "../../store/canvasSlice";

const Rectangle = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const handleAddRec = () => {
        const rect = new fabric.Rect({
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
            height: 50,
            width: 100,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1,
        });
        dispatch(addObj(rect));
        dispatch(disableDrawing());
    };

    return (
        <ToolButton>
            <button onClick={handleAddRec}>
                <Icon className='icon' icon="icon-park:rectangle-one" />
            </button>
        </ToolButton>
    )
};

export default Rectangle;