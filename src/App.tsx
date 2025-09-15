import React from 'react';
import './App.css';
import Header from './Common/Header/header';
import Home from './SCREEN/Home/Home';
import About from './SCREEN/About/About';
import ContactUs from './SCREEN/ContactUs/ContactUs';
import ProductDetails from './SCREEN/ProductDetails/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import ChildHome from './SCREEN/Home/ChildHome';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<ContactUs></ContactUs>} />
        <Route path='/product' element={<ProductDetails></ProductDetails>} />
      </Routes>
    </div>
  );
}

export default App;
