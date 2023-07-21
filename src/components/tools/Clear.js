import React from 'react'
import { Icon } from '@iconify/react';

const Clear = ({ onClear }) => {

    const handleClear = () => {
        onClear()
    }
    return (
        <div >
            <Icon className='icon' onClick={handleClear} icon="icon-park:delete" />
        </div>
    )
}

export default Clear