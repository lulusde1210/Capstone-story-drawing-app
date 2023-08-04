import ToolButton from "../UI/ToolButton";
import { Icon } from "@iconify/react";
// import ToolTip from "../UI/ToolTip";
import { Link } from "react-router-dom";


const Reset = () => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <ToolButton>
            <button onClick={handleReload}>
                <Link to='/createdrawing'>
                    <Icon className='icon' icon="twemoji:new-button" />
                </Link>
            </button>
        </ToolButton>
    )
}

export default Reset