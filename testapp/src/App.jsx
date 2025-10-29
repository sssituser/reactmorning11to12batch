import React, { Component } from 'react';
import Employee from './components/Employee';
import Students from './components/Students';
import Sample from './components/Sample';
import Proucts from './components/Products';
import Parent from './components/Parent';
 
class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="container">
            <div className="card">
        <div className="card-body bg-primary text-white">
           <p className="h1 text-center">App Component</p>
            <Parent/>
        </div>
      </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;