import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useCallback, useEffect } from 'react';

const DeleteOne = ({ canvas }) => {

    const deleteSelectedObjects = useCallback(() => {
        const activeObjs = canvas.getActiveObjects();
        for (const object of activeObjs) {
            canvas.remove(object)
        }
        canvas.renderAll()
    }, [canvas]);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "Backspace") {
                (Object.keys(canvas).length > 0) && deleteSelectedObjects()
            }
        })

    }, [deleteSelectedObjects, canvas]);


    return (
        <ToolButton className='flex justify-center items-center'>
            <Icon className='icon' onClick={() => { deleteSelectedObjects() }} icon="mdi:clear-outline" />
        </ToolButton>
    )
};

export default DeleteOne;