import { fabric } from "fabric";
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

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
        <ToolButton>
            <button onClick={handleAddTriangle}>
                <Icon className='icon' icon="icon-park:triangle" />
            </button>
        </ToolButton>
    )
}

export default Triangle;