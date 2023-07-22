import { fabric } from "fabric";
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const Circle = ({ canvas, onCancelDraw }) => {
    const addCircle = () => {
        const circle = new fabric.Circle({
            originX: 'center',
            originY: 'center',
            radius: 50,
            fill: 'transparent',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
            stroke: 'black',
            strokeWidth: 1,
        });
        canvas.add(circle);
        canvas.renderAll();
    };

    const handleAddCircle = (canvas) => {
        addCircle(canvas);
        onCancelDraw()
    }

    return (
        <ToolButton>
            <button onClick={handleAddCircle}>
                <Icon className='icon' icon="octicon:circle-16" />
            </button>
        </ToolButton>
    )
}

export default Circle;