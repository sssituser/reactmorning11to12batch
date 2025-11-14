import React, { useEffect, useState } from "react";
import axios from 'axios'
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
