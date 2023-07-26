// import stories from "../../data/stories";
import StoryCard from "./StoryCard";
import { useSelector } from "react-redux";

const StoryList = () => {
    const stories = useSelector((state) => state.story.stories)
    return (
        <div className="flex flex-wrap justify-center  gap-10">
            {stories.length === 0 && <h1 className="text-3xl">You don't have any story yet, go and create one!</h1>}
            {stories.length > 0 &&
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