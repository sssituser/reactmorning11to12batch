import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-primary">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <Link to='/' className="nav-link text-white" >Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/register' className="nav-link text-white" >Register</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/login' className="nav-link text-white" >Login</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/about' className="nav-link text-white" >About</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/contact' className="nav-link text-white" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}