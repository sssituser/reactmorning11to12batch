import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function AddProduct(){
    let navi=useNavigate();
    let[product,setProduct]=useState({
        pname:"",
        pprice:"",
        pqty:"",
        pimage:""
    })

function updateInput(event){
    setProduct(
       {
        ...product,
       [event.target.name]:event.target.value
       }
    )
}
function save(event){
    event.preventDefault()
    axios.post("http://localhost:9000/products",product)
    .then(()=>{
        alert("Product Added")
        navi('/')
    }).catch((error)=>{alert(error)})
}

    return(
        <React.Fragment>
           <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <p className="h2">Add Product</p>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={save}>
                                    <div className="form-group">
                                        <input type="text"
                                         name="pname" 
                                         value={product.pname}
                                         onChange={updateInput}
                                         placeholder="Product Name"  className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                         name="pprice"
                                         onChange={updateInput}
                                         value={product.pprice} placeholder="Product Price"  className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" 
                                        name="pqty" value={product.pqty}
                                        onChange={updateInput}
                                        placeholder="No of Products"  className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="pimage" 
                                        value={product.pimage}
                                        onChange={updateInput}
                                        placeholder="ImageLink"  className="form-control"/>
                                    </div>
                                    <button className="btn btn-sm btn-outline-primary">Add Product</button>
                                    <Link to='/' className="btn btn-sm btn-outline-amber float-right">Back</Link>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </React.Fragment>
    )
}
