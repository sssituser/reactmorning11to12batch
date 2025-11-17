import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

export default function ShowProduct(){
    const {id} = useParams();

    const[product,setProduct]=useState({});



    useEffect(()=>{
        axios.get(`http://localhost:9000/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    },[])


    return(
        <React.Fragment>
            <p className="h3 text-primary text-center">Show Product :<b>{id}</b></p>
            <div className="container">
                <div className="card">
                    <div className="card-header text-center bg-secondary text-white">
                        <p className="h1">Product Info</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                           
                            <div className="col-md-4">
                                <img src={product.pimage} height={200} width={200} className="img-thumbnail img-fluid"/>
                            </div>
                             <div className="col-md-8 mt-0">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                     ID : {product.id}
                                    </li>
                                    <li className="list-group-item">
                                     Name : {product.pname}
                                    </li>
                                    <li className="list-group-item">
                                     Price : {product.pprice}
                                    </li>
                                    <li className="list-group-item">
                                     Quantity : {product.pqty}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Link to='/'> 
                        <i className="fa fa-arrow-alt-circle-left fa-3x"/>
                        </Link>
                        <Link to={`/edit/${product.id}`}>
                         <i className="fa fa-square-pen fa-3x float-right"/>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
