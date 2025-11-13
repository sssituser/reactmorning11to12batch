import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AddEmployee(){


    let [employee,setEmployee]=useState({
        name:"",
        sal:""
    })

    let navigate=useNavigate();
    function updateInput(event){
        setEmployee({
            ...employee,
            [event.target.name]:event.target.value
        })
    }

    function save(event){
        event.preventDefault();
       axios.post("http://localhost:9000/employees",employee).then(()=>{
        alert("Record added...")
        navigate('/')
       }).catch((error)=>{
        alert(error)
       })
    }

    return(
        <React.Fragment>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                    <p className="h4 text-center">Add Employee</p>
                            </div>
                            <div className="card-body">

                                <form action="" onSubmit={save}>
                                    <div className="form-group">
                                        <input type="text"
                                        onChange={updateInput}
                                        value={employee.name} placeholder="Enter Name" name="name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number"
                                        onChange={updateInput}
                                        value={employee.sal} placeholder="Enter Salary" name="sal" className="form-control" />
                                    </div>
                                    <button className="btn btn-sm btn-primary">Register</button>
                                    <Link to='/' className="btn btn-outline-primary btn-sm float-right">Employees</Link>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}