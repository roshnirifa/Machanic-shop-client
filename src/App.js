
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact/Contact';
import Header from './Pages/Home/Headers/Header';


import Home from '../src/Pages/Home/Home/Home'
import Blogs from './Pages/Home/Blogs/Blogs';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/DashBoard/Dashboard';
import Profile from './Pages/Profile/Profile';
import Portfolio from './Pages/Portfolio/Portfolio';
import RequriedAuth from './Pages/Login/RequriedAuth';
import PurchaseDetail from './Pages/Home/PurchaseDetail/PurchaseDetail';
import AddReview from './Pages/AddReview/AddReview';
import MyOrder from './Pages/MyOrder/MyOrder';
import Review from './Pages/Home/Review/Review';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='purchaes/:purchaesId' element={
          <RequriedAuth>
            <PurchaseDetail></PurchaseDetail>
          </RequriedAuth>
        }></Route>
        <Route path='purchaes' element={
          <RequriedAuth>
            <PurchaseDetail></PurchaseDetail>
          </RequriedAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequriedAuth>
            <Dashboard></Dashboard>
          </RequriedAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<Profile></Profile>}></Route>
        </Route>
        <Route path='review' element={<Review></Review>}></Route>
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
