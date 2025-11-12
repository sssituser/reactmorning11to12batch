import React from "react";
export default class Simple extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employee:{
                eid:111,
                ename:"abc",
                esal:50000
            }
        };
    }
    render() {
        let{eid,ename,esal}=this.state.employee
        return (
             <React.Fragment>
                <p className="h3 text-center text-secondary">
                    ID :{eid} <br/>
                    Name : {ename} <br/>
                    Salary : {esal}
                </p>
             </React.Fragment>
        );
    }
     
}