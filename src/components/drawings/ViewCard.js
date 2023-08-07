import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const ViewCard = ({ id, title, imgURL, artist }) => {

    const handleLike = () => {

    };

    return (
        <div className="card">
            <Link to={`/alldrawings/${id}`}>
                <img className="w-full" src={imgURL} alt={title} />
            </Link>

            <div className="flex justify-between items-center">
                <Link to={`/users/${artist._id}`}>
                    <div className="px-6 py-4 flex gap-2">
                        <img src={artist.image} alt='artist' className='h-10 w-10 object-cover rounded-full  hidden lg:block' />
                        <div className="text-xs">
                            <p>{title}</p>
                            <p>by @{artist.username}</p>
                        </div>
                    </div>
                </Link>

                <div className="flex justify-center items-end px-6 gap-2 text-xs">
                    <Icon className="text-lg" icon="icon-park-outline:like" onClick={handleLike} />
                    <span>0</span>
                </div>
            </div>
        </div >
    )
}

export default ViewCard