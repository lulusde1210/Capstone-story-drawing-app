import { fabric } from "fabric";
import { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
import { Icon } from '@iconify/react';
import colors from "../data/colors";
import EraserBrush from "./tools/EraserBrush";
import PenBrushes from "./tools/PenBrushes";
import { useDispatch, useSelector } from "react-redux";
import { enableDrawing } from "../store/canvasSlice";

const DrawingTool = () => {
    const canvas = useSelector((state) => state.canvas.canvas)
    const dispatch = useDispatch();

    const [brushSize, setBrushSize] = useState(10);
    const [penColor, setPenColor] = useState('black');
    const [penStyle, setPenStyle] = useState('');
    // const [isFirstRender, setIsFirstRender] = useState(true);

    // useEffect(() => {
    //     if (isFirstRender) {
    //         setIsFirstRender(false)
    //         return
    //     } else {
    //         console.log('state change, call useEffect')
    //         dispatch(enableDrawing({ color: penColor, size: brushSize, style: penStyle }))
    //         // enableDrawing(penColor, brushSize, penStyle)
    //     }
    // }, [penColor, brushSize, penStyle, isFirstRender, dispatch])
    // // how to make it do not render at the beginning ??????

    const handleChangeComplete = (color) => {
        setPenColor(color.hex)
        dispatch(enableDrawing({ color: color.hex, size: brushSize, style: penStyle }))
    };

    const handleChangeBrushSize = (e) => {
        setBrushSize(+e.target.value)
        dispatch(enableDrawing({ color: penColor, size: +e.target.value, style: penStyle }))
    };

    const chooseBrushStyle = (style = 'pencil') => {
        if (style === 'spray') {
            setPenStyle('spray')
            canvas.freeDrawingBrush = new fabric.SprayBrush(canvas)
        } else if (style === 'pencil') {
            setPenStyle('pencil')
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
        }
        dispatch(enableDrawing({ color: penColor, size: brushSize, style: style }))
    };

    const handleClickEraser = () => {
        canvas.freeDrawingBrush = new EraserBrush(canvas);
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.color = '#FAF3F0'
        canvas.freeDrawingBrush.width = 20;
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5">
                <PenBrushes
                    onBrushStyle={chooseBrushStyle}
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