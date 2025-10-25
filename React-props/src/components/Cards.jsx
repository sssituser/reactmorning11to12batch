import React, { Component } from 'react';
 
class Cards extends Component {
    render() { 
        return (
            <React.Fragment>
                <p className="h1 text-center">Cards Component</p>
                <div className="container">
                    <div className="row">


                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://img.republicworld.com/rimages/gkx-fjoboaapky6_16:9-171229318073316_9.webp" alt="" />
                                <div className="card-body text-center">
                                    <p className="lead text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt repellendus deleniti iure tempore sit nobis, dolorum officia dignissimos.</p>
                                    <button className='btn btn-sm btn-outline-orange'>Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://img.republicworld.com/rimages/gkx-fjoboaapky6_16:9-171229318073316_9.webp" alt="" />
                                <div className="card-body text-center">
                                    <p className="lead text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt repellendus deleniti iure tempore sit nobis, dolorum officia dignissimos.</p>
                                    <button className='btn btn-sm btn-outline-orange'>Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://img.republicworld.com/rimages/gkx-fjoboaapky6_16:9-171229318073316_9.webp" alt="" />
                                <div className="card-body text-center">
                                    <p className="lead text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt repellendus deleniti iure tempore sit nobis, dolorum officia dignissimos.</p>
                                    <button className='btn btn-sm btn-outline-orange'>Read More</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}
 
export default Cards;