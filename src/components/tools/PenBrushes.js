import { Icon } from '@iconify/react';

const PenBrushes = ({ onBrushStyle }) => {
    const handleClickPencilBrush = () => {
        onBrushStyle('pencil')
    };

    const handleClickSprayBrush = () => {
        onBrushStyle('spray')
    };

    return (
        <div className='flex gap-2'>
            <Icon
                onClick={handleClickPencilBrush}
                className='icon'
                icon="ph:paint-brush-bold" />

            <Icon
                onClick={handleClickSprayBrush}
                className='icon'
                icon="lucide:spray-can" />


        </div>
    )
}

export default PenBrushes