import React from 'react'
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const SelectArrow = ({ canvas }) => {

    return (
        <ToolButton >
            <Icon
                className='icon'
                onClick={() => { canvas.isDrawingMode = false }}
                icon="grommet-icons:select" />
        </ToolButton>
    )
}

export default SelectArrow