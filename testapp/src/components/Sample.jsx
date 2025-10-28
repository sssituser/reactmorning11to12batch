import React, { Component } from 'react';

class Sample extends Component {
   constructor(props) {
    super(props);
    this.state = {
        count:0
    };
   }
  
   increase = () => {
    this.setState(
        (prevState) => ({
      count: prevState.count + 1
    })
    );
  };
  decrease = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1>0 ? prevState.count-1:0
    }));
  };
    render() { 
        return (
            <React.Fragment>
               <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body text-center">
                                  <button className='btn btn-sm btn-success' onClick={this.increase}>Increase</button>
                                    <span className='h3'>count:{this.state.count}</span>
                                  <button className='btn btn-sm btn-danger' onClick={this.decrease}>Decrease</button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        );
    }
}
 
export default Sample;