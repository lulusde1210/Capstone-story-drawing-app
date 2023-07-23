import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const DeleteOne = ({ canvas }) => {

    const handleDeleteOne = () => {
        const activeObjs = canvas.getActiveObjects();
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