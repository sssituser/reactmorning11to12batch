import React, { Component } from 'react';
 
class ChildComponent extends Component {
    render() { 
        return (
            <React.Fragment>
                <p className="display-3 text-center">ChildComponent</p>
                <p className="h1 text-center">Name : {this.props.name}</p>
                <p className="h1 text-center">Age :{this.props.age}</p>
                <p className="h1 text-center">Contact : {this.props.contact}</p>
            </React.Fragment>
        );
    }
}
 
export default ChildComponent;