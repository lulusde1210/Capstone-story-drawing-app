import './App.css'
import CreateDrawing from './components/CreateDrawing';
import DrawingList from './components/drawings/DrawingList';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import DrawingDetail from './components/drawings/DrawingDetails';
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
          <Route index element={<DrawingList />} />
          <Route path=":id" element={<DrawingDetail />} />
          <Route path=":id/edit" element={<CreateDrawing />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
