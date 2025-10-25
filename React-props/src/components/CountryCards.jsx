import React, { Component } from 'react';
import CountryCard from './CountryCard';

class CountryCards extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <CountryCard name="Photo1" img={Card_1}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CountryCards;