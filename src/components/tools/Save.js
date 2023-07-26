import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { addStory } from "../../store/storySlice";
import { Link } from "react-router-dom";

const Save = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)

    const dispatch = useDispatch();

    const handleSave = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });
        const dataJSON = JSON.stringify(canvas);

        dispatch(addStory({ dataURL, dataJSON, title: "test title", description: "test description" }))

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