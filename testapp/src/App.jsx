import React, { Component } from 'react';
import Employee from './components/Employee';
import Students from './components/Students';
import Sample from './components/Sample';
import Proucts from './components/Products';
import Parent from './components/Parent';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:"Welcome to React Training"
    };
  }
  render() { 
    return (
      <React.Fragment>
        <div className="container">
            <div className="card">
            <div className="card-body bg-primary text-white">
            <p className="h1 text-center">App Component</p>
            <p className="h3 text-center">Message : {this.state.message}</p>
            <Parent info={this.state.message}/>
        </div>
      </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;