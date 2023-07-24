import stories from "../../data/stories";
import StoryCard from "./StoryCard";

const StoryList = () => {
    return (
        <div className="flex gap-10">
            {
                stories.map((story) => (
                    <StoryCard
                        key={story.id}
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