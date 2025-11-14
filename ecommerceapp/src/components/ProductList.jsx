import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function ProductList(){
let[products,setProducts]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:9000/products")
    .then((res)=>{
        setProducts(res.data)
    })
    .catch((error)=>{
        alert(error)
    })
},[])

    return(
        <React.Fragment>
            <section>
                <div className="container">
                    <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ipsa ullam placeat eligendi? Corporis nihil fugiat tempora distinctio eveniet debitis ullam officia repudiandae sit autem necessitatibus est, omnis delectus odit fugit eum! Cumque facilis temporibus, vitae et veritatis nam a iure laboriosam at enim dolor ad dolore soluta perferendis fugit harum distinctio, eum reiciendis doloribus saepe nulla provident iste? Tenetur?
                    </p>
                    
                    <div className="row">
                        <div className="col-md-8">
                            <Link to='/add' className="btn btn-primary btn-sm">Add</Link>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="ID/Name/Price"/>
                        </div>
                    </div>
                </div>
            </section>
          <div className="container mt-5">
              {
                products.length > 0 ?
                
                <table className="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((prod)=>{
                                return(
                                    <tr>
                                        <td>{prod.id}</td>
                                        <td>{prod.pname}</td>
                                        <td><img src={prod.pimage} className="img-fluid" width={50} height={50}/></td>
                                        <td>{prod.pprice}</td>
                                        <td>{prod.pqty}</td>
                                        <td>{prod.pqty*prod.pprice}</td>
                                        <td>
                                            <i className="fa fa-eye text-primary mr-3" />
                                            <i className="fa fa-pen text-warning mr-3"/>
                                            <i className="fa fa-trash text-danger mr-3"/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :

                <p className="h3 text-center">Products Not Found</p>
            }  
          </div>            
        </React.Fragment>
    )
}
