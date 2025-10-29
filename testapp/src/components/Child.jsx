import React, { Component } from 'react';
 
class Child extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-body bg-secondary">
                            <p className="h1 text-center text-danger">Child</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Child;