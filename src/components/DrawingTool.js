import { CirclePicker } from "react-color";
import { Icon } from '@iconify/react';
import { useState } from "react";
import colors from "../data/colors";

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

    return (
        <>
            <div className="flex flex-col justify-center items-start gap-5">
                <Icon onClick={handleClickBrush} className='text-3xl cursor-pointer transition duration-100 hover:scale-110' icon="ph:paint-brush-bold" />

                <CirclePicker
                    width={150}
                    circleSize={40}
                    colors={colors}
                    onChangeComplete={handleChangeComplete}
                />

                <label
                    htmlFor="steps-range"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pen Size
                </label>

                <input
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    min="2"
                    max="50"
                    type="range"
                    value={brushSize}
                    onChange={handleChangeBrushSize}
                />
            </div>

        </>
    )
}

export default DrawingTool