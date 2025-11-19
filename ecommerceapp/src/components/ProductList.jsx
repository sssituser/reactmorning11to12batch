import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom";

export default function ProductList(){
let[products,setProducts]=useState([]);
let[search,setSearch]=useState("");
let navi = useNavigate();
useEffect(()=>{
   prodlist()
},[])
function prodlist(){
    axios.get("http://localhost:9000/products")
    .then((res)=>{
        setProducts(res.data)
    })
    .catch((error)=>{
        alert(error)
    })
}
    function delProduct(id){
        axios.delete(`http://localhost:9000/products/${id}`)
        .then(()=>{
            alert("Product deleted...")
            prodlist()
        })
        .catch((error)=>{
            alert(error)
        })
    }

const filteredProducts = products

.filter((prod)=>`${prod.id}${prod.pname}${prod.pqty}`

.toLowerCase().includes(search.toLowerCase()))





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
                            <input type="text"
                            onChange={(event)=>{setSearch(event.target.value)}}
                            name="search" value={search} className="form-control" placeholder="ID/Name/Price"/>
                        </div>
                    </div>
                </div>
            </section>
          <div className="container mt-5">
              {
                filteredProducts.length > 0 ?
                
                <table className="table table-bordered table-striped text-center">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th><b>ID</b></th>
                            <th><b>Name</b></th>
                            <th><b>Image</b></th>
                            <th><b>Price</b></th>
                            <th><b>Quantity</b></th>
                            <th><b>Total</b></th>
                            <th><b>Operations</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredProducts.map((prod)=>{
                                return(
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.pname}</td>
                                        <td><img src={prod.pimage} className="img-fluid" width={50} height={50}/></td>
                                        <td>&#8377;{Number(prod.pprice).toFixed(2)}</td>
                                        <td>{prod.pqty}</td>
                                        <td>&#8377;{(prod.pqty*prod.pprice).toFixed(2)} </td>
                                        <td>
                                          
                                          <Link to={`/view/${prod.id}`}>
                                            <i className="fa fa-eye fa-2x mr-3 text-primary"/>
                                          </Link>

                                          <Link to={`/edit/${prod.id}`}>
                                            <i className="fa fa-pen fa-2x text-secondary"/>
                                          </Link>

                                          <Link onClick={()=>{delProduct(prod.id)}}>
                                            <i  className="fa fa-trash fa-2x text-danger ml-3"/>
                                          </Link>
                                          
                                            
                                            
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
