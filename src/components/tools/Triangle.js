import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';


const Triangle = ({ canvas }) => {

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
        canvas.add(triangle);
        canvas.renderAll();
        canvas.isDrawingMode = false;
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