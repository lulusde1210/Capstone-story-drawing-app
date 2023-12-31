import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useUpdateDrawingLikeCountMutation } from "../../store/drawingsApiSlice";
import { toast } from 'react-toastify';

const ViewCard = ({ id, title, imgURL, likeCount, artist, comments }) => {

    const [updateDrawingLikeCount] = useUpdateDrawingLikeCountMutation();

    const handleLike = async () => {
        try {
            await updateDrawingLikeCount({ id }).unwrap()
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <div className="card">
            <Link to={`/alldrawings/${id}`}>
                <img className="w-96" src={imgURL} alt={title} />
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

                <div className="flex justify-center items-end px-6 gap-5 text-xs">
                    <div className="flex justify-center items-center gap-1">
                        <Icon className="text-lg" icon="uil:comment" />
                        <span>{comments.length}</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <Icon className="text-lg hover:scale-105 cursor-pointer" icon="fxemoji:redheart" onClick={handleLike} />
                        <span>{likeCount}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewCard