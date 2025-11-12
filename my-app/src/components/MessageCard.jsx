import React from "react";
export default class MessageCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"Vijaya Devarakonda",
            age :"40",
            contact:"9999999999",
            qualification:"B.Tech",
            imageurl:"https://wallpapercave.com/wp/wp4005207.jpg"

        };
    }
    render() {
        return (
             <React.Fragment>
                <div className="container">
                    <div className="row">
                  <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.state.imageurl} height={250} width={250} alt="image is loading" className="img-thumbnail img-fluid" />
                                </div>
                                <div className="col-md-6 mt-3">
                                        <ul className="list-group">
                                             <li className="list-group-item">
                                                <b>Name : {this.state.name}</b>
                                             </li>
                                             <li className="list-group-item">
                                                Age : <b>{this.state.age}</b>
                                             </li>
                                             <li className="list-group-item">
                                                Qualification :<b>{this.state.qualification}</b>
                                             </li>
                                             <li className="list-group-item">
                                                Contact : <b>{this.state.contact}</b>
                                             </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
             </React.Fragment>
        );
    }
     
}