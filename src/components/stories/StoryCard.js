import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import { deleteStory, setStoryId } from "../../store/storySlice";
import { Link } from "react-router-dom";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";


const StoryCard = ({ id, storyTitle, imgURL, imgJSON }) => {
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)
    const stories = useSelector((state) => state.story.stories)

    const handleEditStory = () => {
        dispatch(saveCanvasJSON(imgJSON))
        dispatch(saveCanvasURL(imgURL))
        dispatch(setStoryId(id))
        // canvas.loadFromJSON(imgJSON, canvas.renderAll.bind(canvas))
    };

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg transition duration-100 hover:scale-105">
            <Link to={`/mylibrary/${id}`}>
                <img className="w-full" src={imgURL} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <h1 className="text-2xl">{storyTitle}</h1>
                    <p>here will be date created</p>
                </div>
            </Link>
            <div className="flex justify-between px-6 pt-4 pb-2 ">
                <Link to='/'>
                    <Icon onClick={handleEditStory} className='icon-small' icon="akar-icons:edit" />
                </Link>
                <Icon onClick={() => dispatch(deleteStory(id))} className='icon-small' icon="material-symbols:delete-outline" />
            </div>
        </div >
    )
}

export default StoryCard