import React, { Component } from 'react';
 
class CountryCard extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.img} className='img-fluid' alt="" />
                    <div className="card-body">
                        <p className="h1">Name :{this.props.name}</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, recusandae.</p>
                        <button className='btn btn-md btn-success'>Read More</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CountryCard;