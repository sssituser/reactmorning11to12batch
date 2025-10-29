import React, { Component } from 'react';
import Child from './Child';
 
class Parent extends Component {
    render() { 
        return (
            <React.Fragment>
               <div className="container">
                    <div className="card">
                        <div className="card-body bg-warning">
                             <p className="h3 text-center text-success">Parent Component</p>
                            <Child/>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        );
    }
}
 
export default Parent;