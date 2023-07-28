import DownLoad from "./tools/DownLoad"
import Save from "./tools/Save"

const SaveBar = ({ canvas }) => {
    return (
        <div className="grid grid-cols-2 shadow-md py-5 gap-5 bg-red-100 rounded-md">
            <DownLoad canvas={canvas} />
            <Save canvas={canvas} />
        </div>
    )
};

export default SaveBar;