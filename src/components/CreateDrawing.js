import { useEffect } from 'react';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';
import 'fabric-history';
import { useSelector, useDispatch } from "react-redux";
import { initCanvas } from '../store/canvasSlice';


const CreateDrawing = () => {
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.canvas.canvas)
    console.log('canvas states', canvas)

    useEffect(() => {
        console.log('creating canvas')
        dispatch(initCanvas())
    }, [dispatch]);

    return (
        <div className='w-full flex justify-center items-center gap-10'>
            <ToolBar />
            <Canvas />
            <DrawingTool />
        </div>
    );
}


export default CreateDrawing;
