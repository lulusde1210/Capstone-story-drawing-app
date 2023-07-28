import ToolButton from "../UI/ToolButton";
import { Icon } from "@iconify/react";
import ToolTip from "../UI/ToolTip";

const Reset = () => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <ToolButton>
            <button onClick={handleReload}>
                <Icon className='icon' icon="twemoji:new-button" />
            </button>
            <ToolTip content='Start a new drawing' />
        </ToolButton>)
}

export default Reset