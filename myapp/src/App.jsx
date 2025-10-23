import React, { Component } from 'react';
import ParentComponent from './components/ParentComponent'; 
import CountryCard from './components/CountryCard';
import Card_1 from './assets/images/Card_1.jpg';
import Card_2 from './assets/images/Card_2.jpg';
import Card_3 from './assets/images/Card_3.jpg';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <CountryCard name="Phot-1" img={Card_1}/>
            </div>
            <div className="col-md-4">
              <CountryCard name="Phot-2" img={Card_2}/>
            </div>
            <div className="col-md-4">
              <CountryCard name="Phot-3" img={Card_3}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;