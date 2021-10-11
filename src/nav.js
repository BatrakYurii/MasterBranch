import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return <nav>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/registration">
                    <li>Registration</li>
                </Link>
                <Link to="/game">
                    <li>Game</li>
                </Link>
                <Link to="/cars">
                    <li>Car</li>
                </Link>
            </ul>
        </nav>
    }
}

export default Nav;