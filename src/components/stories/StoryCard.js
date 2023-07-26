import { useSelector, useDispatch } from "react-redux";
import { Icon } from '@iconify/react';
import { deleteStory, setStoryId } from "../../store/storySlice";
import { Link } from "react-router-dom";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";


const StoryCard = ({ id, storyTitle, imgURL, imgJSON }) => {
    const dispatch = useDispatch();

    const handleEditStory = () => {
        dispatch(saveCanvasJSON(imgJSON))
        dispatch(saveCanvasURL(imgURL))
        dispatch(setStoryId(id))
    };

    return (
        <div className="card">
            <Link to={`/mylibrary/${id}`}>
                <img className="w-full" src={imgURL} alt={storyTitle} />
                <div className="px-6 py-4">
                    <h1 className="h1">{storyTitle.toUpperCase()}</h1>
                    <p>here will be date created</p>
                </div>
            </Link>
            <div className="flex justify-between px-6 pt-4 pb-2 ">
                <Link to='/createstory'>
                    <Icon onClick={handleEditStory} className='icon-small' icon="akar-icons:edit" />
                </Link>
                <Icon onClick={() => dispatch(deleteStory(id))} className='icon-small' icon="material-symbols:delete-outline" />
            </div>
        </div >
    )
}

export default StoryCard