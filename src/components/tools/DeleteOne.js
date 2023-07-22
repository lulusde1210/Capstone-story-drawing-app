import { Icon } from '@iconify/react';

const DeleteOne = ({ canvas }) => {


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

    // it will delete the whole text when text if editting

    return (
        <div >
            <Icon className='icon' onClick={handleDeleteOne} icon="mdi:clear-outline" />
        </div>
    )
}

export default DeleteOne