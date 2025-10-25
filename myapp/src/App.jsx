import React, { Component } from 'react';
import Test from './components/Test';
import MessageCard from './components/MessageCard';
import Employee from './components/Employee';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <Test/>
        <Employee/>
      </React.Fragment>
    );
  }
}
 
export default App;