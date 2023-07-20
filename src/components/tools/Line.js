import { fabric } from "fabric";
import { Icon } from '@iconify/react';

const Line = ({ canvas, onCancelDraw }) => {
    const addLine = () => {
        const line = new fabric.Line([50, 100, 200, 100], {
            stroke: 'black'
        });
        canvas.add(line);
        canvas.renderAll();
    };

    const handleAddLine = (canvas) => {
        addLine(canvas);
        onCancelDraw()
    }


    return (
        <div>
            <button className='text-4xl' onClick={handleAddLine}>
                <Icon className='transition duration-100 hover:scale-110' icon="pepicons-print:line-x" />

            </button>
        </div>
    )
}

export default Line;