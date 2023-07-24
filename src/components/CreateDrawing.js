import { useEffect, useState } from 'react';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';
import 'fabric-history';
import { useSelector, useDispatch } from "react-redux";
import { initCanvas } from '../store/canvasSlice';
import SaveBar from './SaveBar';

const CreateDrawing = () => {
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)

    console.log('canvas states', canvas)
    console.log('canvasURL states', canvasURL)
    console.log('canvasJSON states', canvasJSON)

    useEffect(() => {
        console.log('creating canvas')
        dispatch(initCanvas())
    }, [dispatch]);

    return (
        <div className='w-full flex justify-center items-center gap-10'>
            <div className='flex flex-col gap-8'>
                <ToolBar />
                <SaveBar />
            </div>
            <Canvas />
            <DrawingTool />
        </div >
    );
}


export default CreateDrawing;
