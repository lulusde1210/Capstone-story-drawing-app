import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { addStory, editStory, setStoryId } from "../../store/storySlice";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { Link } from "react-router-dom";

const Save = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)

    const storyId = useSelector((state) => state.story.storyId)
    const storyState = useSelector((state) => state.story)

    console.log('story id', storyId)

    const dispatch = useDispatch();

    const handleSave = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });
        const dataJSON = JSON.stringify(canvas);

        if (!storyId) {
            dispatch(addStory({ dataURL, dataJSON, title: "test title", description: "test description" }))
        } else {
            dispatch(editStory({ storyId, dataURL, dataJSON, title: "updated title", description: "updated description" }))
        }

        dispatch(saveCanvasJSON(''))
        dispatch(saveCanvasURL(''))
        dispatch(setStoryId(null))
    };

    return (
        <ToolButton >
            <button >
                <Link to='/mylibrary'>
                    <Icon onClick={handleSave} className='icon' icon="icon-park:save" />
                </Link>
            </button>
        </ToolButton>
    )
};

export default Save;