import { Link } from "react-router-dom";

const ViewCard = ({ id, title, imgURL, artist }) => {

    return (
        <div className="card">
            <Link to={`/alldrawings/${id}`}>
                <img className="w-full" src={imgURL} alt={title} />
                <div className="px-6 py-4 flex justify-between">
                    <p className="text-xl">{title}</p>
                    <img src={artist.image} alt='artist' className='h-10 w-10 object-cover rounded-full  hidden lg:block' />
                </div>
            </Link>
        </div >
    )
}

export default ViewCard