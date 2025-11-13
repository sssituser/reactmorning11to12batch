import React from "react";
import { Link } from "react-router-dom";

export default  function FindEmployee(){

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                <p className="h3">Employeee Info</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <b>ID</b> 111
                                    </li>
                                    <li className="list-group-item">
                                        <b>Name</b> abc
                                    </li>
                                    <li className="list-group-item">
                                        <b>Salary</b> 5000
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                               <Link to='/edit' className="btn btn-primary btn-sm">
                                Edit
                               </Link>
                                <Link to='/' className="btn btn-success btn-sm float-right">
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