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
            <button className='text-4xl' onClick={handleAddText}>
                <Icon className='transition duration-100 hover:scale-110' icon="fluent-emoji-flat:a-button-blood-type" />
            </button>
        </div>
    )
}

export default Text;