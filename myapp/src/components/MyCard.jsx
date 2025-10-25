import React, { Component } from 'react';
 
class MyCard extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <img src={this.props.img} alt="Image is loading" />
                        <div className="card-body">
                            <p className="h3">Name :{this.props.name}</p>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, magni.</p>
                            <button className='btn btn-sm btn-success'>Read More</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MyCard;