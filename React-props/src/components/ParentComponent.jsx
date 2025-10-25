import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
    render() { 
        return (
            <React.Fragment>
                <p className="display-4 text-center">ParentComponent</p>
                <ChildComponent name="kiran" age="20" contact="9876543210"/>
                  <ChildComponent name="Raj" age="25" contact="9999999999"/>
            
            </React.Fragment>
        );
    }
}
 
export default ParentComponent;