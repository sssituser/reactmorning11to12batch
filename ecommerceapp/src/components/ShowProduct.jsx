import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'


export default function ShowProduct(){
    let {id} = useParams();
    let[product,setProduct] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:9000/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((error)=>{alert(error)})

    },[]);


    



    return(
        <React.Fragment>
            <div className="container">
               
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header text-center bg-secondary text-white">
                                <p className="h3">Product Information</p>
                            </div>
                            <div className="card-body">
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        <p className="h4">Product Name <b>{product.pname}</b></p>
                                    </li>
                                     <li className='list-group-item'>
                                        <p className="h4">Product Price <b>&#8377; {Number(product.pprice).toFixed(2)}</b></p>
                                    </li>
                                     <li className='list-group-item'>
                                        <p className="h4">Quantity <b>{product.pqty}pcs</b></p>
                                    </li>
                                    <li className='list-group-item text-center'>
                                        <img src={product.pimage} alt="" className='img-fluid' height={200} width={200} />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                 <Link to={`/edit/${product.id}`} className='btn btn-sm btn-outline-amber'>
                                    Edit
                                </Link>
                                <Link to='/' className="btn btn-sm btn-outline-secondary float-right">
                                    Back
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}