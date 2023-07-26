import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { initCanvas } from '../store/canvasSlice';
import 'fabric-history';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import DrawingTool from './DrawingTool';
import SaveBar from './SaveBar';

// import StoryList from './stories/StoryList';

const CreateDrawing = () => {
    // const [isFirst, setIsFirst] = useState(true)
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.canvas.canvas)
    // const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const canvasState = useSelector((state) => state.canvas)
    // const storyState = useSelector((state) => state.story)


    useEffect(() => {
        console.log('Creating Canvas...')
        dispatch(initCanvas())
    }, [dispatch]);

    console.log('canvas state', canvasState)
    // console.log('story state', storyState)
    // console.log('canvasURL', canvasURL)
    // console.log('canvasJSON', canvasJSON)

    useEffect(() => {
        console.log('Load canvasJSON...')
        if (Object.keys(canvas).length !== 0 && canvasJSON.length > 0) {
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
            {/* <StoryList /> */}
        </>
    );
};


export default CreateDrawing;
