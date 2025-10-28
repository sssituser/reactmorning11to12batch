import React, { Component } from 'react';
 
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emp:{
                eid:111,
                ename:"abc",
                esal:50000
            }
        };
    }
     
    render() { 
        let{eid,ename,esal} = this.state.emp // unpacking
        return (
            <React.Fragment>
                <section>
                    <p className="h3 text-center text-warning">
                        Employee ID :{this.state.emp.eid}
                        <br />
                        Employee Name :{this.state.emp.ename}
                        <br />
                        Employee Salary :{this.state.emp.esal}

                    </p>
                </section>
                <section>
                    <p className="h1 text-center">After using Destrucuture</p>
                    <p className="h3 text-center text-primary">
                        Employee Id : {eid}
                        <br />
                        Employee Name : {ename}
                        <br />
                        Employee Salary : {esal}
                    </p>
                </section>
                
            </React.Fragment>
        );
    }
}
 
export default Employee;