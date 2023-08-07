import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';
import SaveBar from './SaveBar';
import { fabric } from 'fabric';
import 'fabric-history';

const CreateDrawing = () => {
    const [canvas, setCanvas] = useState({})
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const drawing = useSelector((state) => state.drawings.drawing)

    useEffect(() => {
        const canvas = new fabric.Canvas('canvas', {
            height: 650,
            width: 1000,
            backgroundColor: '#FAF3F0',
        });
        setCanvas(canvas)
    }, []);

    useEffect(() => {
        if (canvas['_objects'] && canvasJSON.length > 0) {
            canvas.loadFromJSON(canvasJSON, canvas.renderAll.bind(canvas))
        }
    }, [canvasJSON, canvas, drawing])

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div>
                    {drawing ? <h1>Edit Drawing</h1> : <h1>Create new Drawing</h1>}
                </div>
                <div className='w-full flex justify-center items-center gap-10'>
                    <div className='flex flex-col gap-8'>
                        <ToolBar canvas={canvas} />
                        <SaveBar canvas={canvas} />
                    </div>
                    <Canvas canvas={canvas} />
                    <DrawingTool canvas={canvas} />
                </div>
            </div >
        </>
    );
};


export default CreateDrawing;
