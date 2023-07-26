import './App.css'
import CreateDrawing from './components/CreateDrawing';
import StoryList from './components/stories/StoryList';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import StoryDetail from './components/stories/StoryDetail';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CreateDrawing />} />
        <Route path="mylibrary" >
          <Route index element={<StoryList />} />
          <Route path=":id" element={<StoryDetail />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
