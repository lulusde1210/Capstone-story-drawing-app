import React from 'react'
import { Icon } from '@iconify/react';

const SelectArrow = ({ onCancelDraw }) => {

    const handleClickSelectArrow = () => {
        onCancelDraw()
    }
    return (
        <div >
            <Icon
                className='icon'
                onClick={handleClickSelectArrow}
                icon="grommet-icons:select" />
        </div>
    )
}

export default SelectArrow