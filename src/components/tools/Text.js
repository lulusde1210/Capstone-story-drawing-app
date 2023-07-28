import { fabric } from "fabric";
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const Text = ({ canvas }) => {

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
        canvas.add(text);
        canvas.renderAll();
        canvas.isDrawingMode = false;
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