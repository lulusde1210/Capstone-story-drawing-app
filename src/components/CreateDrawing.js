import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { initCanvas } from '../store/canvasSlice';
import 'fabric-history';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';
import SaveBar from './SaveBar';


const CreateDrawing = () => {
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const canvasState = useSelector((state) => state.canvas)


    useEffect(() => {
        console.log('Creating Canvas...')
        dispatch(initCanvas())
    }, [dispatch]);

    console.log('canvas state', canvasState)

    useEffect(() => {
        console.log('Load canvasJSON...')
        if (Object.keys(canvas).length > 0 && canvasJSON.length > 0) {
            canvas.loadFromJSON(canvasJSON, canvas.renderAll.bind(canvas))
        }
    }, [canvas, canvasJSON])


    return (
        <>
            <div className='w-full flex justify-center items-center gap-10'>
                <div className='flex flex-col gap-8'>
                    <ToolBar />
                    <SaveBar />
                </div>
                <Canvas />
                <DrawingTool />
            </div >
        </>
    );
};


export default CreateDrawing;
