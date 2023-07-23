import React from 'react'
import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useDispatch } from "react-redux"
import { disableDrawing } from "../../store/canvasSlice";

const SelectArrow = () => {
    const dispatch = useDispatch();

    const handleClickSelectArrow = () => {
        dispatch(disableDrawing())
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