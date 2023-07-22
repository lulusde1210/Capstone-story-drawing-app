import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const PenBrushes = ({ onBrushStyle }) => {
    const handleClickPencilBrush = () => {
        onBrushStyle('pencil')
    };

    const handleClickSprayBrush = () => {
        onBrushStyle('spray')
    };

    return (
        <ToolButton>
            <Icon
                onClick={handleClickPencilBrush}
                className='icon'
                icon="ph:paint-brush-bold" />

            <Icon
                onClick={handleClickSprayBrush}
                className='icon'
                icon="lucide:spray-can" />
        </ToolButton>
    )
}

export default PenBrushes