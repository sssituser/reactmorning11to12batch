import React, { Component } from 'react';
 
class FormsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:{
                eid:"",
                ename:"",
                esal:"",
                dept:""
            }
        };
    }
     

    updateInput=(event)=>{
        this.setState({
            employee:{
                ...this.state.employee,
                [event.target.name]:event.target.value
            }
        })
    }


    save=(event)=>{
        event.preventDefault()
        alert(JSON.stringify(this.state.employee))
    }

   
   
   
   
   
   
    render() { 
        
        let{eid,ename,esal,dept} = this.state.employee

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mt-lg-5">
                        {JSON.stringify(this.state.employee)}
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg-primary text-white text-center">
                                    <p className="h4">Regiter Here</p>
                                </div>
                                <div className="card-body">

                                  <form action="" onSubmit={this.save}>

                                      <div className="form-group">
                                        <input type="text" 
                                        name="eid" 
                                        value={eid} 
                                        placeholder='Employee ID'
                                        onChange={this.updateInput}
                                        className='form-control' />

                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        name="ename" 
                                        onChange={this.updateInput}
                                        value={ename} placeholder='Employee Name' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={this.updateInput}
                                        name="esal" value={esal} placeholder='Employee Salary' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        onChange={this.updateInput}
                                        name="dept" value={dept} placeholder='DeparatMent' className='form-control' />
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