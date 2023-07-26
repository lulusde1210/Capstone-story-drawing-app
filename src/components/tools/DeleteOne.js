import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { deleteSelectedObjects } from '../../store/canvasSlice';

const DeleteOne = () => {
    const canvas = useSelector((state) => state.canvas.canvas);
    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "Backspace") {
                (Object.keys(canvas).length > 0) && dispatch(deleteSelectedObjects())
            }
        })
    }, [canvas, dispatch]);


    return (
        <ToolButton className='flex justify-center items-center'>
            <Icon className='icon' onClick={() => dispatch(deleteSelectedObjects())} icon="mdi:clear-outline" />
        </ToolButton>
    )
};

export default DeleteOne;