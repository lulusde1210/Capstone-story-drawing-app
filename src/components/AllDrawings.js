import { useGetAllDrawingsQuery } from "../store/drawingsApiSlice";
import ViewCard from "./drawings/ViewCard";
import Loader from "./UI/Loader";
import SearchBar from "./UI/SearchBar";
import { useEffect, useState } from "react";

const AllDrawings = () => {
    const [search, setSearch] = useState('')
    const { data, isLoading } = useGetAllDrawingsQuery(search)
    const drawingsData = data?.drawings
    const [drawingsDisplay, setDrawingsDisplay] = useState([])

    useEffect(() => {
        setDrawingsDisplay(drawingsData)
    }, [drawingsData])


    const handleSortByLike = () => {
        const newDrawings = [...drawingsDisplay].sort((a, b) => {
            return b.likeCount - a.likeCount
        })
        setDrawingsDisplay(newDrawings)
    };

    const handleSortByDate = () => {
        const newDrawings = [...drawingsDisplay].sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        setDrawingsDisplay(newDrawings)
    }

    const handleSearch = (searchTerm) => {
        setSearch(searchTerm)
    }

    return (
        <>
            <div className="w-full h-full flex flex-col mt-16 sm:mt-28 gap-10">
                <div className="flex flex-col justify-center items-center px-36 xl:flex-row xl:justify-between">
                    <h1 className="w-96 text-center text-base sm:text-3xl">Explore Arts</h1>
                    <div className="py-3 px-10 gap-3 flex flex-col sm:flex-row sm:gap-6">
                        <div className="flex gap-6">
                            <button className="btn-small" onClick={handleSortByLike}>Most liked</button>
                            <button className="btn-small" onClick={handleSortByDate}>Most recent</button>
                        </div>
                        <SearchBar handleSearch={handleSearch} />
                    </div>
                </div>

                {isLoading && <Loader />}
                {!isLoading &&
                    <div className="flex flex-wrap justify-center gap-5 ">
                        {drawingsDisplay && drawingsDisplay.length > 0 &&
                            drawingsDisplay.map((drawing) => (
                                <ViewCard
                                    key={drawing.id}
                                    id={drawing.id}
                                    title={drawing.title}
                                    imgURL={drawing.imgURL}
                                    likeCount={drawing.likeCount}
                                    artist={drawing.artist}
                                    comments={drawing.comments}
                                />
                            ))
                        }
                    </div>}
                {drawingsDisplay && drawingsDisplay.length === 0 &&
                    <div className="flex justify-center items-center">
                        <h1>No arts found!</h1>
                    </div>}
            </div>
        </>
    )
};

export default AllDrawings;