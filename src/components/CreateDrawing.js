import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';

const CreateDrawing = () => {
    const [canvas, setCanvas] = useState({});

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 650,
            width: 800,
            backgroundColor: '#FAF3F0',
        })
    )

    const disableDrawing = () => {
        canvas.isDrawingMode = false
    }

    const clearCanvas = () => {
        canvas.getObjects().forEach((obj) => {
            canvas.remove(obj);
        })
    }

    return (
        <div className='w-full flex justify-center items-center gap-6'>
            <ToolBar
                canvas={canvas}
                onCancelDraw={disableDrawing}
                onClear={clearCanvas}
            />
            <Canvas canvas={canvas} />
            <DrawingTool canvas={canvas} />
        </div>
    );
}


export default CreateDrawing;
