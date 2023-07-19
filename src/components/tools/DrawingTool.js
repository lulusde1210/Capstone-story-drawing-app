import { CirclePicker } from "react-color";
import { Icon } from '@iconify/react';

const DrawingTool = ({ brushSize, onChooseColor, onChangeSize, onClickBrush }) => {
    const colors =
        ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
            "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
            "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#000000"]

    const handleChangeComplete = (color) => {
        onChooseColor(color.hex)
    }

    const handleChangeBrushSize = (e) => {
        console.log(e.target.value)
        onChangeSize(e.target.value)
    }

    const handleClickBrush = () => {
        onClickBrush()
    }

    return (
        <>
            <div className="flex flex-col justify-center items-start gap-5">
                <Icon onClick={handleClickBrush} className='text-3xl cursor-pointer' icon="ph:paint-brush-bold" />

                <CirclePicker
                    width={150}
                    circleSize={40}
                    colors={colors}
                    onChangeComplete={handleChangeComplete}
                />

                <label
                    htmlForfor="steps-range"
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