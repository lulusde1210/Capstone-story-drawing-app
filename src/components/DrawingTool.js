import { CirclePicker } from "react-color";
import { Icon } from '@iconify/react';
import { useState, useEffect, useCallback } from "react";
import colors from "../data/colors";
import EraserBrush from "./tools/EraserBrush";
import { fabric } from "fabric";
import PenBrushes from "./tools/PenBrushes";

const DrawingTool = ({ canvas }) => {
    const [brushSize, setBrushSize] = useState(10)
    const [penColor, setPenColor] = useState('black')
    const [penStyle, setPenStyle] = useState('pencil')

    // useEffect(() => {
    //     enableDrawing(penColor, brushSize)
    // }, [penColor, brushSize])
    /// why it is not working?????

    const enableDrawing = (color, size, style) => {
        canvas.isDrawingMode = true
        if (style === 'pencil') {
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)

        } else if (style === 'spray') {
            canvas.freeDrawingBrush = new fabric.SprayBrush(canvas)
        } else {
        }
        canvas.freeDrawingBrush.color = color
        canvas.freeDrawingBrush.width = size

    }

    const handleChangeComplete = (color) => {
        setPenColor(color.hex)
        enableDrawing(color.hex, brushSize, penStyle)

    };

    const handleChangeBrushSize = (e) => {
        setBrushSize(+e.target.value)
        enableDrawing(penColor, +e.target.value, penStyle)
    };

    const onBrush = (style = '') => {
        if (style === 'spray') {
            setPenStyle('spray')
            canvas.freeDrawingBrush = new fabric.SprayBrush(canvas)
        } else {
            setPenStyle('pencil')
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
        }
        enableDrawing(penColor, brushSize, style)
    };


    const handleClickEraser = () => {
        canvas.freeDrawingBrush = new EraserBrush(canvas);
        canvas.freeDrawingBrush.color = '#FAF3F0'
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 20;

    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5">
                <PenBrushes
                    onBrush={onBrush}
                />

                <input
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    min="2"
                    max="50"
                    type="range"
                    value={brushSize}
                    onChange={handleChangeBrushSize}

                />

                <CirclePicker
                    className="flex justify-center items-center"
                    width={150}
                    circleSize={40}
                    colors={colors}
                    onChangeComplete={handleChangeComplete}
                />

                <Icon
                    onClick={handleClickEraser}
                    className='icon'
                    icon="fluent:eraser-small-20-filled"
                />

            </div>

        </>
    )
}

export default DrawingTool