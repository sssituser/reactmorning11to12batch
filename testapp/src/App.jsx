import React, { Component } from 'react';
import Employee from './components/Employee';
import Students from './components/Students';
 
class App extends Component {
  render() { 
    return (
      <React.Fragment>
       <p className="h1 text-center">App Component</p>
      <Students/>
      </React.Fragment>
    );
  }
}
 
export default App;