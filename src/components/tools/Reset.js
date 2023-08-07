import ToolButton from "../UI/ToolButton";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetDrawing } from "../../store/drawingSlice";
import React from "react";
import { saveCanvasJSON, saveCanvasURL } from "../../store/canvasSlice";

const Reset = () => {
    const dispatch = useDispatch();

    const handleRet = () => {
        dispatch(resetDrawing())
        dispatch(saveCanvasJSON(''))
        dispatch(saveCanvasURL(''))
    };

    return (
        <ToolButton>
            <button onClick={handleRet}>
                <Link to='/createdrawing'>
                    <Icon className='icon' icon="twemoji:new-button" />
                </Link>
            </button>
        </ToolButton>
    )
}

export default Reset