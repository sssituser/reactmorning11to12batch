import React, { Component } from 'react';
import FormsComponent from './components/FormsComponent';
import Test from './components/Test';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
       <div className="container">
        <Test/>
        <FormsComponent/>

        
       </div>
        
      </React.Fragment>
    );
  }
}
 
export default App;