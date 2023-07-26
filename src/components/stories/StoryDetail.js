import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StoryDetail = () => {
    const { id } = useParams();
    const stories = useSelector((state) => state.story.stories)
    const story = stories.filter((story) => story.id === +id)[0]
    // this will will replaced by axios call api getonestory..
    return (
        <div>
            <h1 className="text-3xl">{story.title}</h1>
            <p>{story.content}</p>
            <img src={story.imgURL} />
        </div>
    )
};

export default StoryDetail;