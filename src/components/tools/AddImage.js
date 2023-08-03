import { Icon } from '@iconify/react';
import { fabric } from 'fabric';
import { useRef } from 'react';
import ToolButton from '../UI/ToolButton';

const AddImage = ({ canvas }) => {
    const imgRef = useRef();

    const handleAddImage = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        fabric.Image.fromURL(url, img => {
            canvas.add(img)
            canvas.renderAll();
        }, {
            crossOrigin: 'Anonymous',
            scaleX: 1,
            scaleY: 1,
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
        })
        imgRef.current.value = null;
        canvas.isDrawingMode = false;
    };

    return (
        <ToolButton>
            <label htmlFor='img' >
                <Icon className='icon' icon="fluent-emoji-flat:framed-picture" />
            </label>
            <input
                className='hidden'
                ref={imgRef}
                type='file'
                id='img'
                name='img'
                accept='image/*'
                onChange={handleAddImage}
            />
        </ToolButton>
    )
}

export default AddImage