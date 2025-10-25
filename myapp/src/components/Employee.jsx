import React, { Component } from 'react';
 
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emp:{
                eid:111,
                ename:"abcd",
                esal:45000
            }
        };
    }
     
    render() { 
        return (
            <React.Fragment>
                <p className="h1">ID : {this.state.emp.eid}</p>
                <p className="h1">Name : {this.state.emp.ename}</p>
                <p className='h1'>Salary:{this.state.emp.esal}</p>
            </React.Fragment>
        );
    }
}
 
export default Employee;