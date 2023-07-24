import './App.css'
import CreateDrawing from './components/CreateDrawing';

import ShowCanvasImage from './components/ShowCanvasImage';

const App = () => {

  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <CreateDrawing />
      <ShowCanvasImage />
    </div>
  );
}

export default App;
