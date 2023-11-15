import React from "react";
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";


export default function Navbar () {
    return (
        <nav className="nav-container">
            <div className="nav-center">
                <Link to={'/'}>
                <img src={logo} alt="cocktails" />
                </Link>
                <ul className="nav-links">
                    <li className="link"><Link to={'/'}>Home</Link></li>
                    <li className="link"><Link to={'/about'}>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}