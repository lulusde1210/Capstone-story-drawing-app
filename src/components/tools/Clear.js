import React from 'react'
import { Icon } from '@iconify/react';

const Clear = ({ onClear }) => {

    const handleClear = () => {
        onClear()
    }
    return (
        <div className='cursor-pointer text-4xl'>
            <Icon className='transition duration-100 hover:scale-110' onClick={handleClear} icon="icon-park:delete" />
        </div>
    )
}

export default Clear