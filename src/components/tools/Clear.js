import { Icon } from '@iconify/react';

const Clear = ({ canvas }) => {
    const clearCanvas = () => {
        canvas.getObjects().forEach((obj) => {
            canvas.remove(obj);
        })
        canvas.renderAll()
    };

    return (
        <div >
            <Icon className='icon' onClick={clearCanvas} icon="icon-park:delete" />
        </div>
    )
}

export default Clear