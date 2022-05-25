
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact/Contact';
import Header from './Pages/Home/Headers/Header';


import Home from '../src/Pages/Home/Home/Home'
import Blogs from './Pages/Home/Blogs/Blogs';
import Pusrchase from './Pages/Purchase/Pusrchase';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/DashBoard/Dashboard';
import Profile from './Pages/Profile/Profile';
import MyOrder from './Pages/MyOrder/MyOrder';
import Portfolio from './Pages/Portfolio/Portfolio';
import RequriedAuth from './Pages/Login/RequriedAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='purchaes' element={
          <RequriedAuth>
            <Pusrchase></Pusrchase>
          </RequriedAuth>
        }></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
        <Route path='profile' element={<Profile></Profile>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
