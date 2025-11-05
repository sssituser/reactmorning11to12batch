import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";


export default function App(){

  return(
   <React.Fragment>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
  </React.Fragment>
)
}