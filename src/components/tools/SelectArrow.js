import React from 'react'
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const SelectArrow = ({ onCancelDraw }) => {

    const handleClickSelectArrow = () => {
        onCancelDraw()
    }
    return (
        <ToolButton >
            <Icon
                className='icon'
                onClick={handleClickSelectArrow}
                icon="grommet-icons:select" />
        </ToolButton>
    )
}

export default SelectArrow