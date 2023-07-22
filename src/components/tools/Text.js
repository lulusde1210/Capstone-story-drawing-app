import { fabric } from "fabric";
import { Icon } from '@iconify/react';

const Text = ({ canvas, onCancelDraw }) => {
    const addText = () => {
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
    };

    const handleAddText = (canvas) => {
        addText(canvas);
        onCancelDraw()
    }

    return (
        <div>
            <button onClick={handleAddText}>
                <Icon className='icon' icon="fluent-emoji-flat:a-button-blood-type" />
            </button>
        </div>
    )
}

export default Text;