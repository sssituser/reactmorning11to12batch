import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ShowProduct from "./components/ShowProduct";
import EditProduct from "./components/EditProduct";

export default function App(){
  return(
    <React.Fragment>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/view/:id" element={<ShowProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
       
      </Routes>
     </BrowserRouter>
    </React.Fragment>
  ) 
}