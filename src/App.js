import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import CreateDrawing from './components/CreateDrawing';
import Layout from './components/Layout';
import DrawingDetail from './components/drawings/DrawingDetails';
import HomeView from './components/HomeView';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import AllDrawings from './components/AllDrawings';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';
import EditProfile from './components/user/EditProfile';
import UserView from './components/UserView';

const App = () => {
  const { userInfo } = useSelector(state => state.auth);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="alldrawings" >
            <Route index element={<AllDrawings />} />
            <Route path=":id" element={<DrawingDetail />} />
            <Route path=":id/edit" element={userInfo ? <CreateDrawing /> : <Login />} />
          </Route>

          <Route path="users" >
            <Route index element={<UserView />} />
            <Route path=":id" element={<UserView />} />
          </Route>

          <Route path="" element={<PrivateRoute />} >
            <Route path="createdrawing" element={<CreateDrawing />} />
            <Route path="editprofile" element={<EditProfile />} />
          </Route>

          <Route path="login" element={!userInfo ? <Login /> : <HomeView />} />
          <Route path="signup" element={!userInfo ? <Signup /> : <HomeView />} />
          <Route path="*" element={<NotFound />} />
        </ Route >
      </Routes >
    </>

  );
}

export default App;
