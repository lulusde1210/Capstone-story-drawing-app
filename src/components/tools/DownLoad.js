import ToolButton from "../UI/ToolButton"
import { Icon } from '@iconify/react';

const DownLoad = ({ canvas }) => {

    const handleDownload = () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1,
        });
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'canvas_image.png';
        link.click();
        canvas.isDrawingMode = false;
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