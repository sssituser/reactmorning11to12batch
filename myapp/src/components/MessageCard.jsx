import React, { Component } from 'react';
 
class MessageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"abc",
            age:35
        };
    }
     
    
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            My Info
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="" alt="" />
                                </div>
                                <div className="col-md-8">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MessageCard;