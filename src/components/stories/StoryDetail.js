import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";
import { deleteStory, setStoryId } from "../../store/storySlice";


const StoryDetail = () => {
    const { id } = useParams();
    const stories = useSelector((state) => state.story.stories)
    const story = stories.filter((story) => story.id === +id)[0]
    const dispatch = useDispatch();

    const handleEditStory = () => {
        dispatch(saveCanvasJSON(story.imgJSON))
        dispatch(saveCanvasURL(story.imgURL))
        dispatch(setStoryId(story.id))
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 m-10 w-3/4">
            <h1 className="text-3xl">{story.title}</h1>
            <div className="flex justify-between px-6 pt-4 pb-2 ">
                <Link to='/'>
                    <Icon onClick={handleEditStory} className='icon-small' icon="akar-icons:edit" />
                </Link>
                <Link to='/mylibrary'>
                    <Icon onClick={() => dispatch(deleteStory(story.id))} className='icon-small' icon="material-symbols:delete-outline" />
                </Link>
            </div>
            <p className="text-center w-3/4">{story.content}</p>
            <img src={story.imgURL} alt={`${story.title}`} className="rounded-xl" />
        </div>
    )
};

export default StoryDetail;