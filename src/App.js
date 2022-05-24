
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact/Contact';
import Header from './Pages/Home/Headers/Header';


import Home from '../src/Pages/Home/Home/Home'
import Blogs from './Pages/Home/Blogs/Blogs';
import Pusrchase from './Pages/Purchase/Pusrchase';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='purchaes' element={<Pusrchase></Pusrchase>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
