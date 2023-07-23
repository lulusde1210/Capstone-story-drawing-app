import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { useSelector } from "react-redux"

const UndoRedo = () => {
    const canvas = useSelector((state) => state.canvas.canvas)

    return (
        <ToolButton>
            <button onClick={() => canvas.undo()}>
                <Icon className='icon' icon="system-uicons:backward" />
            </button>
            <button onClick={() => canvas.redo()}>
                <Icon className='icon' icon="system-uicons:forward" />
            </button>
        </ToolButton>
    )
};

export default UndoRedo;