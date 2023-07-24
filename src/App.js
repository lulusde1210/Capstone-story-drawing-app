import './App.css'
import CreateDrawing from './components/CreateDrawing';
import StoryList from './components/stories/StoryList';

const App = () => {

  return (
    <div className='w-full my-48 h-max flex flex-col justify-center items-center gap-6'>
      <CreateDrawing />
      <StoryList />
    </div>
  );
}

export default App;
