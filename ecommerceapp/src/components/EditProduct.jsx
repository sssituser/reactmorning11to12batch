import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom';


export default function EditProduct(){
    
    let {id} = useParams()
    let[prod,setProd]=useState({});
    let navigate =useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:9000/products/${id}`)
        .then((res)=>{
            setProd(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    },[])
    function updateInput(event){
        setProd({
            ...prod,
            [event.target.name]:event.target.value
        })
    }
    function save(event){
        event.preventDefault();
        axios.put(`http://localhost:9000/products/${id}`,prod)
        .then(()=>{
            alert("Product updated...")
            navigate('/')
        })
        .catch((error)=>{
            alert(error)
        })
    }

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-center text-white">
                                <p className="h2">Edit Product {id}</p>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={save}>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="id" value={prod.id} className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pname" value={prod.pname} className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pprice" value={prod.pprice} className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pimage" value={prod.pimage} className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={updateInput}
                                        name="pqty" value={prod.pqty} className='form-control' />
                                    </div>
                                        <button style={{borderRadius:10}} className=' btn btn-md btn-outline-secondary'>Save</button>
                                        <Link to='/' style={{borderRadius:10}} className="btn btn-md btn-outline-primary float-right">
                                            Back
                                        </Link>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}