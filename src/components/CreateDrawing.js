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
            width: 800,
            backgroundColor: '#FAF3F0',
        })
    );


    const handleUndo = () => {

    }

    const handleRedo = () => {

    }


    return (
        <div className='w-full flex justify-center items-center gap-6'>
            <div className='flex gap-2 absolute top-20 left-100'>
                <button onClick={handleUndo}>undo</button>
                <button onClick={handleRedo}>redo</button>
            </div>

            <ToolBar canvas={canvas} />
            <Canvas canvas={canvas} />
            <DrawingTool canvas={canvas} />
        </div>
    );
}


export default CreateDrawing;
