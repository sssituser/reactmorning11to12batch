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
                             <p className="h3 text-center text-white">Infomration:{this.props.info}</p>
                            <Child msg={this.props.info}/>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        );
    }
}
 
export default Parent;