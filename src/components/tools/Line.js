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
            <button onClick={handleAddLine}>
                <Icon className='icon' icon="pepicons-print:line-x" />

            </button>
        </div>
    )
}

export default Line;