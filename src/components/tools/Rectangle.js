import { fabric } from "fabric";
import { Icon } from '@iconify/react';

const Rectangle = ({ canvas, onCancelDraw }) => {
    const addRec = () => {
        const rect = new fabric.Rect({
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
            height: 50,
            width: 100,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1
        });
        canvas.add(rect);
        canvas.renderAll();
    }

    const handleAddRec = (canvas) => {
        addRec(canvas);
        onCancelDraw()
    }

    return (
        <div>
            <button className='text-4xl' onClick={handleAddRec}>
                <Icon className='transition duration-100 hover:scale-110' icon="icon-park:rectangle-one" />
            </button>
        </div>
    )
}

export default Rectangle