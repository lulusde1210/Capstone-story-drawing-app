import './App.css'
import CreateDrawing from './components/CreateDrawing';
import DrawingList from './components/drawings/DrawingList';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import DrawingDetail from './components/drawings/DrawingDetails';
import HomeView from './components/HomeView';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import { useSelector } from 'react-redux';
import AllDrawings from './components/AllDrawings';

const App = () => {
  const auth = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="alldrawings" element={<AllDrawings />} />
        <Route path="createstory" element={auth.isLogin ? <CreateDrawing /> : <Login />} />
        <Route path="mylibrary" >
          <Route index element={<DrawingList />} />
          <Route path=":id" element={<DrawingDetail />} />
          <Route path=":id/edit" element={<CreateDrawing />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </ Route >
    </Routes >
  );
}

export default App;
