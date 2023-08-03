import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-6xl">Oops! 404 Not Found!</h1>
            <img src='/sorry.png' alt='notfound' width='450px' />
            <Link to='/'>
                <button className="btn-primary">Go to Homepage</button>
            </Link>
        </div>
    )
}

export default NotFound