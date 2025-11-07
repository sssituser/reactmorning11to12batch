import React, { useState } from "react";

export default function Contact(){
    let[employees,setEmployees]=useState(
        [
            {
                eid:111,
                ename:"charanya",
                esal:60000
            },
            {
                eid:112,
                ename:"kavya",
                esal:60000
            },
            {
                eid:113,
                ename:"Anjali",
                esal:50000
            },
            {
                eid:113,
                ename:"Swathi",
                esal:55000
            },
        ]
    );
    let[search,setSearch]=useState("")

    const filteredEmployees = employees.filter((emp)=>`${emp.eid}${emp.ename}${emp.esal}`.toLowerCase().includes(search.toLowerCase()))
  
    return(
        <React.Fragment>
            <section>
                <div className="container mt-4">
                    
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam deserunt totam fugiat, iste dignissimos recusandae est maiores magnam, itaque sint quidem a, ipsam sed delectus blanditiis enim culpa iure suscipit unde facilis nulla! Consectetur non, optio culpa eligendi cupiditate delectus dolorem asperiores atque eius fuga mollitia perferendis vero earum?
                    </p>
                    <div className="row">
                        <div className="col-md-8">
                            <button className="btn btn-md btn-danger">Add Employee</button>
                        </div>
                        <div className="col-md-4">
                            <input type="search" name="search"

                            onChange={(event)=>{setSearch(event.target.value)}}

                            value={search} className="form-control border-secondary" />
                        </div>
                    </div>
                </div>
            </section>




            <section>
                <div className="container text-center">

                <p className="h1 mt-5 text-center text-primary">Contact Page</p>
                {
                    filteredEmployees.length>0 ?
                    <table className="table table-bordered table-hover table-striped">
                        <thead className="text-primary">
                            <tr>
                                <th><b>Employee ID</b></th>
                                <th><b>Employee Name</b></th>
                                <th><b>Employee Salary</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredEmployees.map((emp)=>{
                                    return(
                                        <tr >
                                            <td><b>{emp.eid}</b></td>
                                            <td><b>{emp.ename}</b></td>
                                            <td><b>{emp.esal}</b></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <p className="h3">Records Not Found</p>
                }
            </div>
            </section>
        </React.Fragment>
    )
}