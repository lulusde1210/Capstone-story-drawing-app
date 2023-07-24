import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';

const StoryCard = ({ storyTitle, imgURL, imgJSON }) => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const canvasURL = useSelector((state) => state.canvas.canvasURL)
    const canvasJSON = useSelector((state) => state.canvas.canvasJSON)

    const handleEditCanvas = (imgJSON) => {
        canvas.loadFromJSON(imgJSON, canvas.renderAll.bind(canvas))
    };

    return (
        <div class="max-w-sm rounded-xl overflow-hidden shadow-lg transition duration-100 hover:scale-105">
            <img class="w-full" src={imgURL} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    {storyTitle}
                </div>
                <p>here will be date created</p>
            </div>
            <div class="flex justify-between px-6 pt-4 pb-2 ">
                <Icon onClick={() => handleEditCanvas(imgJSON)} className='icon-small' icon="akar-icons:edit" />
                <Icon className='icon-small' icon="material-symbols:delete-outline" />

            </div>
        </div>

    )
}

export default StoryCard