import React from "react";
export default class Sample extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name :"kavyCharan"
        };
    }
    render() {
        return (
             <React.Fragment>
                <p className="h1 text-center text-primary">{this.state.name}</p>
             </React.Fragment>
        );
    }
     
}