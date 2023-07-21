import { Icon } from '@iconify/react';

const PenBrushes = ({ onBrush }) => {
    const handleClickBaseBrush = () => {
        onBrush('pencil')
    };

    const handleClickSprayBrush = () => {
        onBrush('spray')
    };

    return (
        <div className='flex gap-2'>
            <Icon
                onClick={handleClickBaseBrush}
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