import React from "react";

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count :0
        };
    }

increase=()=>{
        this.setState({
            count:this.state.count+1
        })
  }
decrease=()=>{
        this.setState({
            count:this.state.count-1 > 0 ? this.state.count-1:0
        })
  }
    render() {
        return (
             <React.Fragment>
                <div className="cotainer text-center">
                    <button onClick={this.increase} className="btn btn-success btn-sm">Increment</button>
                <p className="h1 text-center"> Count :{this.state.count}</p>
                    <button onClick={this.decrease} className="btn btn-sm btn-danger">Decrement</button>
                </div>
             </React.Fragment>
        );
    }
}