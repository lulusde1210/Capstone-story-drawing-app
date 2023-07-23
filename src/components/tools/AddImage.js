import { Icon } from '@iconify/react';
import { fabric } from 'fabric';
import { useRef } from 'react';
import ToolButton from '../UI/ToolButton';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing, addObj } from "../../store/canvasSlice";

const AddImage = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const imgRef = useRef();

    const handleAddImage = (e) => {
        console.log(e.target.files[0])
        const url = URL.createObjectURL(e.target.files[0]);
        fabric.Image.fromURL(url, img => {
            dispatch(addObj(img))
        }, {
            scaleX: 1,
            scaleY: 1,
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
        })
        imgRef.current.value = null
        dispatch(disableDrawing)
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