import React from "react";
class Test extends React.Component{
    constructor(props) {

        super(props);
        this.state = {
            id : 111,
            name:"kiran",
            contact:"9876543210"
        };

    }
    render() {
        return (
             <React.Fragment>
                <p className="h1 text-center">
                    ID :{this.state.id} <br />
                    Name : {this.state.name} <br />
                    Contact :{this.state.contact}
                </p>
             </React.Fragment>
        );
    }

}

export default Test;