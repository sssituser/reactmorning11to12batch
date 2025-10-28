import React, { Component } from 'react';
import Employee from './components/Employee';
import Students from './components/Students';
import Sample from './components/Sample';
import Proucts from './components/Products';
 
class App extends Component {
  render() { 
    return (
      <React.Fragment>
       <p className="h1 text-center">App Component</p>
      <Sample/>
      <Proucts/>
      </React.Fragment>
    );
  }
}
 
export default App;