import React, { Component } from 'react';
 
class Proucts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product:{
                id:"1A04501",
                name:"bulb",
                img:"https://www.freepnglogos.com/uploads/bulb-png/blue-light-bulb-png-clip-art-best-web-clipart-19.png",
                price:50,
                qty:0
            }
        };
    }
     

    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <table className='table table-bordered table-striped table-hover'>
                        <thead className='bg-dark text-white text-center'>
                            <tr>
                                <th>Product ID</th>
                                <th> Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>{this.state.product.id}</td>
                                <td>{this.state.product.name}</td>
                                <td>
                                    <img src={this.state.product.img} alt=""
                                    width={'50px'}
                                    height={'50px'}
                                    />

                                </td>
                                <td>{this.state.product.price}</td>
                                <td>{this.state.product.qty}</td>
                                <td>{this.state.product.qty * this.state.product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Proucts;