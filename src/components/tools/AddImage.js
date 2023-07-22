import { Icon } from '@iconify/react';
import { fabric } from 'fabric';
import { useRef } from 'react';
import ToolButton from '../UI/ToolButton';

const AddImage = ({ canvas, onCancelDraw }) => {
    const imgRef = useRef();

    const handleAddImage = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        fabric.Image.fromURL(url, img => {
            canvas.add(img);
            canvas.renderAll();
        }, {
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
            erasable: false
            //??? no working!!

        })
        imgRef.current.value = null
        onCancelDraw()
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