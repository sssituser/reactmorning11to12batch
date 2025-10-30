import React, { Component } from 'react';
 
class FormsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:{
                eid:111,
                ename:"abc",
                esal:50000,
                dept:"HR"
            }
        };
    }
     


    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg-primary text-white text-center">
                                    <p className="h4">Regiter Here</p>
                                </div>
                                <div className="card-body">
                                  <form action="">
                                      <div className="form-group">
                                        <input type="text" name="eid" value={this.state.employee.eid} placeholder='Employee ID' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="ename" value={this.state.employee.ename} placeholder='Employee Name' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="esal" value={this.state.employee.esal} placeholder='Employee Salary' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="dept" value={this.state.employee.dept} placeholder='DeparatMent' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <button className='btn btn-sm btn-outline-primary'>Register</button>
                                         <button className='btn btn-sm btn-outline-danger float-right'>Cancel</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default FormsComponent;