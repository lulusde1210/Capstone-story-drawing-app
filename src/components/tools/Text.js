import { fabric } from "fabric";
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useDispatch, useSelector } from "react-redux"
import { addObj, disableDrawing } from "../../store/canvasSlice";

const Text = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const handleAddText = () => {
        const text = new fabric.IText(
            'Tap and Type', {
            fontFamily: 'arial',
            fontSize: 25,
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
        });
        dispatch(addObj(text));
        dispatch(disableDrawing());
    }

    return (
        <ToolButton>
            <button onClick={handleAddText}>
                <Icon className='icon' icon="fluent-emoji-flat:a-button-blood-type" />
            </button>
        </ToolButton>
    )
};

export default Text;