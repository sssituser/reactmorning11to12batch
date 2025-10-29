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
   
    incr=()=>{
 
        this.setState({
            product:{
                ...this.state.product,
                qty:this.state.product.qty+1
            }
        })
    }
    decr=()=>{
 
        this.setState({
            product:{
                ...this.state.product,
                qty:this.state.product.qty-1 > 0 ?this.state.product.qty-1:0
            }
        })
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
                                <td className='font-weight-bold'>{this.state.product.id}</td>
                                <td className='font-weight-bold'>{this.state.product.name}</td>
                                <td>
                                    <img src={this.state.product.img} alt=""
                                    width={'50px'}
                                    height={'50px'}
                                    />

                                </td>
                                <td className='font-weight-bold'> &#8377;{this.state.product.price} </td>
                                <td className='font-weight-bold'>
                                   
                                   

                                <i className='fa fa-plus-circle fa-1x text-primary mr-3' onClick={this.incr}/>

                                    {this.state.product.qty}

                                <i className='fa fa-minus-circle fa-1x text-danger ml-3' onClick={this.decr}/>

                                    
                                   
                                </td>
                                <td className='font-weight-bold'> &#8377; {this.state.product.qty * this.state.product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Proucts;