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
           <div className="container mt-5">
                <div className="row">   
                    <div className="col-md-5">
                        <div className="card" style={{borderRadius:20}} >
                            <div  style={{borderTopRightRadius:20,borderTopLeftRadius:20}} className=" card-header bg-primary text-white text-center">
                                <p className="h2">Add Product</p>
                            </div>
                            <div  className="card-body">
                                <form action="" onSubmit={save}>
                                    <div className="form-group">
                                        <input type="text"
                                         name="pname" 
                                         value={product.pname}
                                         onChange={updateInput}
                                         placeholder="Product Name" required  className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                         name="pprice"
                                         onChange={updateInput}
                                         value={product.pprice} placeholder="Product Price" required  className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" 
                                        name="pqty" value={product.pqty}
                                        onChange={updateInput}
                                        placeholder="No of Products" required   className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="pimage" 
                                        value={product.pimage}
                                        onChange={updateInput}
                                        required
                                        placeholder="ImageLink"  className="form-control"/>
                                    </div>
                                    <button style={{borderRadius:10}} className="btn btn-md btn-outline-primary">Add Product</button>
                                    <Link to='/' style={{borderRadius:10}} className="btn btn-md btn-outline-amber float-right">Back</Link>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </React.Fragment>
    )
}
