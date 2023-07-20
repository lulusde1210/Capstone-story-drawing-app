import { fabric } from "fabric";
import { Icon } from '@iconify/react';

const Triangle = ({ canvas, onCancelDraw }) => {
    const addTriangle = () => {
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
        canvas.add(triangle);
        canvas.renderAll();
    };

    const handleAddTriangle = (canvas) => {
        addTriangle(canvas);
        onCancelDraw()
    }


    return (
        <div>
            <button className='text-4xl' onClick={handleAddTriangle}>
                <Icon className='transition duration-100 hover:scale-110' icon="icon-park:triangle" />
            </button>
        </div>
    )
}

export default Triangle;