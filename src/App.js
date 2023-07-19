import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import Canvas from './components/Canvas';
import ToolBar from './components/ToolBar';
import DrawingTool from './components/tools/DrawingTool';
import './App.css'

const App = () => {
  const [canvas, setCanvas] = useState({});
  const [brushSize, setBrushSize] = useState(10)
  const [penColor, setPenColor] = useState('black')

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 650,
      width: 800,
      backgroundColor: '#FAF3F0',
    })
  )

  const chooseColorPen = (color) => {
    setPenColor(color)
    enableDrawing(color, brushSize)
  }

  const enableDrawing = (color, size) => {
    canvas.freeDrawingBrush.color = color
    canvas.freeDrawingBrush.width = size
    canvas.isDrawingMode = true

  }

  const disableDrawing = () => {
    canvas.isDrawingMode = false
  }

  const chooseBrushSize = (size) => {
    setBrushSize(size)
    enableDrawing(penColor, size)
  }

  return (
    <div className='w-full flex justify-center items-center gap-6'>
      <ToolBar
        canvas={canvas}
        onCancelDraw={disableDrawing}
      />
      <Canvas canvas={canvas} />
      <DrawingTool
        brushSize={brushSize}
        canvas={canvas}
        onChooseColor={chooseColorPen}
        onChangeSize={chooseBrushSize}
        onClickBrush={() => enableDrawing('black', 10)}
      />
    </div>
  );
}


export default App;
