import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useParams,useNavigate} from 'react-router-dom'

export default function EditProduct(){
    let {id} =useParams();
    let navigate=useNavigate();
    let[product,setProduct]=useState({});
    useEffect(()=>{
        axios.get(`http://localhost:9000/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    },[])
    function updateInput(event){
        setProduct({
            ...product,
            [event.target.name]:event.target.value
        })
    }
    function save(event){
        event.preventDefault()
        axios.put(`http://localhost:9000/products/${product.id}`,product)
        .then(()=>{
            alert("product updated")
            navigate('/')
        })
        .catch((error)=>{
            alert(error)
        })
    }
    return(
        <React.Fragment>
           <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                 <p className="h3  text-center">Edit Product</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form action="" onSubmit={save}>
                                    <div className="form-group">
                                        <input type="text" name="pid" value={product.id} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        onChange={updateInput}
                                        name="pname" value={product.pname} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pimage" value={product.pimage} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pprice" value={product.pprice} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pqty" value={product.pqty} className="form-control" />
                                    </div>
                                    <button className="btn btn-success btn-sm">Save</button>
                                    <Link to='/' className="btn btn-danger btn-sm float-right">Back</Link>
                                </form>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={product.pimage}  className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
            
        </React.Fragment>
    )
}
