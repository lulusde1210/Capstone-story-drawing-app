import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';

const Rectangle = ({ canvas }) => {
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
        canvas.add(rect);
        canvas.renderAll();
        canvas.isDrawingMode = false;
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