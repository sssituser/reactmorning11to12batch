import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function EditProduct(){
    let{id}=useParams()
    let[prod,setProd]=useState({});
    useEffect(()=>{
        axios.get(`http://localhost:9000/products/${id}`)
        .then((res)=>{
            setProd(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    },[])
    return(
        <React.Fragment>
            <div className="container">
                <p className="h1 text-center text-success">Edit Product</p>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}