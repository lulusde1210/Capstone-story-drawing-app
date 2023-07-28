import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';


const Clear = ({ canvas }) => {
    const handleClearCanvas = () => {
        canvas.getObjects().forEach((obj) => {
            canvas.remove(obj);
        })
        canvas.renderAll()
        canvas.isDrawingMode = false
    };

    return (
        <ToolButton>
            <Icon className='icon' onClick={handleClearCanvas} icon="icon-park:delete" />
        </ToolButton>
    )
}

export default Clear