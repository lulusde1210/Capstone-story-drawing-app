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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './components/AllUsers';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';
import Profile from './components/user/Profile';

const App = () => {
  const { userInfo } = useSelector(state => state.auth);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="alldrawings" element={<AllDrawings />} />
          <Route path="users" element={<AllUsers />} />

          <Route path='' element={<PrivateRoute />} >
            <Route path="createdrawing" element={<CreateDrawing />} />
            <Route path="mylibrary" >
              <Route index element={<DrawingList />} />
              <Route path=":id" element={<DrawingDetail />} />
              <Route path=":id/edit" element={<CreateDrawing />} />
            </Route>
            <Route path="profile" element={<Profile />} />

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
