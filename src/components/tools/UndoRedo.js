import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';

const UndoRedo = ({ canvas }) => {

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