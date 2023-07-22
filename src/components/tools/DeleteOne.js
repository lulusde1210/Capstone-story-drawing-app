import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const DeleteOne = ({ canvas, onCancelDraw }) => {
    const handleDeleteOne = () => {
        console.log('inside deleteObects canvas', canvas)
        const activeObjs = canvas.getActiveObjects();
        console.log('active-obj', activeObjs)
        for (const object of activeObjs) {
            canvas.remove(object)
        }
        canvas.renderAll()
    };

    window.addEventListener('keydown', ({ key }) => {
        console.log('key', key)
        if (key === 'Backspace') {
            (canvas.width) && handleDeleteOne()
        }
    });

    return (
        <ToolButton className='flex justify-center items-center'>
            <Icon className='icon' onClick={handleDeleteOne} icon="mdi:clear-outline" />
        </ToolButton>
    )
}

export default DeleteOne