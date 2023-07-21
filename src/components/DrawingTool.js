import { CirclePicker } from "react-color";
import { Icon } from '@iconify/react';
import { useState } from "react";
import colors from "../data/colors";
import EraserBrush from "./tools/EraserBrush";

const DrawingTool = ({ canvas }) => {
    const [brushSize, setBrushSize] = useState(10)
    const [penColor, setPenColor] = useState('black')

    const enableDrawing = (color, size) => {
        canvas.isDrawingMode = true
        canvas.freeDrawingBrush.color = color
        canvas.freeDrawingBrush.width = size
    }

    const handleChangeComplete = (color) => {
        setPenColor(color.hex)
        enableDrawing(color.hex, brushSize)
    };

    const handleChangeBrushSize = (e) => {
        setBrushSize(e.target.value)
        enableDrawing(penColor, e.target.value)
    };

    const handleClickBrush = () => {
        enableDrawing('black', 10)
    };

    const handleClickEraser = () => {
        canvas.freeDrawingBrush = new EraserBrush(canvas);
        canvas.freeDrawingBrush.color = '#FAF3F0'
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 20;
    }

    return (
        <>
            <div className="flex flex-col justify-center items-start gap-5">
                <Icon
                    onClick={handleClickBrush}
                    className='icon'
                    icon="ph:paint-brush-bold" />

                <input
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    min="2"
                    max="50"
                    type="range"
                    value={brushSize}
                    onChange={handleChangeBrushSize}
                />
                <CirclePicker
                    width={150}
                    circleSize={40}
                    colors={colors}
                    onChangeComplete={handleChangeComplete}
                />

                <Icon
                    onClick={handleClickEraser}
                    className='icon'
                    icon="fluent:eraser-small-20-filled" />

            </div>

        </>
    )
}

export default DrawingTool