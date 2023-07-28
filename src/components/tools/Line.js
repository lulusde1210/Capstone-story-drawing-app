import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { fabric } from 'fabric';

const Line = ({ canvas }) => {

    const handleAddLine = () => {
        const line = new fabric.Line([50, 100, 200, 100], {
            stroke: 'black'
        });
        canvas.add(line);
        canvas.renderAll();
        canvas.idDrawingMode = false;
    };

    return (
        <ToolButton className='flex justify-center items-center'>
            <button onClick={handleAddLine}>
                <Icon className='icon' icon="pepicons-print:line-x" />
            </button>
        </ToolButton>
    )
}

export default Line;