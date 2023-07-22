import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const Clear = ({ canvas, onCancelDraw }) => {
    const clearCanvas = () => {
        canvas.getObjects().forEach((obj) => {
            canvas.remove(obj);
        })
        canvas.renderAll()
        onCancelDraw()

    };

    return (
        <ToolButton>
            <Icon className='icon' onClick={clearCanvas} icon="icon-park:delete" />
        </ToolButton>
    )
}

export default Clear