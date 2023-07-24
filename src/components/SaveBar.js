import DownLoad from "./tools/DownLoad"
import Save from "./tools/Save"

const SaveBar = () => {
    return (
        <div className="grid grid-cols-2 shadow-md py-5 gap-5 bg-red-100 rounded-md">
            <DownLoad />
            <Save />
        </div>
    )
};

export default SaveBar;