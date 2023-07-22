import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';
import 'fabric-history';

const CreateDrawing = () => {
    const [canvas, setCanvas] = useState({});

    useEffect(() => {
        console.log('creating canvas')
        setCanvas(initCanvas());
    }, []);

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 650,
            width: 1000,
            backgroundColor: '#FAF3F0',
        })
    );

    return (
        <div className='w-full flex justify-center items-center gap-10'>
            <ToolBar canvas={canvas} />
            <Canvas canvas={canvas} />
            <DrawingTool canvas={canvas} />
        </div>
    );
}


export default CreateDrawing;
