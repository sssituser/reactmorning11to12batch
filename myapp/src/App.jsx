import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Employees from './components/Employees';
import AddEmployee from './components/AddEmployee';
import FindEmployee from './components/FindEmployee';
import EditEmployee from './components/EditEmployee';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Employees/>}/>
            <Route path='/add' element={<AddEmployee/>}/>
            <Route path='/edit' element={<EditEmployee/>}/>
            <Route path='/view' element={<FindEmployee/>}/>
            
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
 
export default App;