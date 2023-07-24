import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux"
import { disableDrawing } from "../../store/canvasSlice";

const DownLoad = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const handleDownload = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'canvas_image.png';
        link.click();
        dispatch(disableDrawing())
    };

    return (
        <ToolButton >
            <button onClick={handleDownload} >
                <Icon className='icon' icon="icon-park:download-three" />
            </button>
        </ToolButton>
    )
};

export default DownLoad;