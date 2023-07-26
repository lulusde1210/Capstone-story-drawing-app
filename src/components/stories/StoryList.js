// import stories from "../../data/stories";
import StoryCard from "./StoryCard";
import { useSelector } from "react-redux";

const StoryList = () => {
    const stories = useSelector((state) => state.story.stories)
    return (
        <div className="flex gap-10">
            {
                stories.map((story) => (
                    <StoryCard
                        key={story.id}
                        id={story.id}
                        storyTitle={story.title}
                        imgURL={story.imgURL}
                        imgJSON={story.imgJSON}
                    />
                ))
            }
        </div>
    )
};

export default StoryList;