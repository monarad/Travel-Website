import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       
       <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
       </Routes>

    </div>
  );
}

export default App;
