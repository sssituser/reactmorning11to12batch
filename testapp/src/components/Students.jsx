import React, { Component } from 'react';
 
class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studs:[
                {sid:111,sname:"abc",smarsk:500},
                {sid:112,sname:"pqr",smarsk:550},
                {sid:113,sname:"def",smarsk:600},
                {sid:114,sname:"lmn",smarsk:650},
            ]
        };
    }
     
    render() { 
        return (
            <React.Fragment>
               <div className="container">
                 <table className='table table-bordered table-hover table-striped text-center'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.studs.map((stu)=>{
                                return(
                                    <tr>
                                        <td>{stu.sid}</td>
                                        <td>{stu.sname}</td>
                                        <td>{stu.smarsk}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                 </table>
               </div>
            </React.Fragment>
        );
    }
}
 
export default Students;