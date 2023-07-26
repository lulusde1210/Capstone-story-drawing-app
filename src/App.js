import './App.css'
import CreateDrawing from './components/CreateDrawing';
import StoryList from './components/stories/StoryList';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import StoryDetail from './components/stories/StoryDetail';
import HomeView from './components/HomeView';
import Login from './components/user/Login';
import Signup from './components/user/Signup';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="createstory" element={<CreateDrawing />} />
        <Route path="mylibrary" >
          <Route index element={<StoryList />} />
          <Route path=":id" element={<StoryDetail />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
