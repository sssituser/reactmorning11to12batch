import React, { Component } from 'react';
import FormsComponent from './components/FormsComponent';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <p className="h1 text-center text-danger">App Component</p>
        <FormsComponent/>
      </React.Fragment>
    );
  }
}
 
export default App;