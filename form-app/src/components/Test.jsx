import React,{useState} from "react";

export default function Test(){

    let[employee,setEmployee]=useState(
        {
            
                eid:111,
                ename:"abc",
                esal:50000,
                dept:"Development"
            
        }
    );

    function updateInput(event){
        setEmployee({
            ...employee,
            [event.target.name]:event.target.value
        })        
    }


    return(
        <React.Fragment>
            <p className="h4 text-center text-danger">Test Functional Component</p>
            <p>{JSON.stringify(employee)}</p>
        
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h1">Register Here</p>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                    <input type="text" name='eid' value={employee.eid} 
                                    placeholder="Employee id"
                                    className="form-control"
                                    onChange={updateInput}
                                    />
                                    </div>
                                    <div className="form-group">
                                    <input type="text" name='ename' value={employee.ename} 
                                    placeholder="Employee Name"
                                    className="form-control"
                                    />
                                    </div>
                                    <div className="form-group">
                                    <input type="text" name='esal' value={employee.esal} 
                                    placeholder="Employee Salary"
                                    className="form-control"
                                    />
                                    
                                    </div>

                                    <div className="form-group">
                                    <input type="text" name='dept' value={employee.dept} 
                                    placeholder="Department" className="form-control"/>
                                    </div>
                                    <button className="btn btn-sm btn-outline-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
       
        </React.Fragment>
    )
}