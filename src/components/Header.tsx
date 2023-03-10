import React from 'react';
import logo from '../assets/img/logo.svg'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header id='header'>
            <div className="container bg-white py-4 px-8">
                <div>
                    <img src={logo} alt=""/>
                </div>

                <nav>
                    <NavLink to='/'>Menu</NavLink>
                    <NavLink to='/'>Orders</NavLink>
                    <NavLink to='/'>Admin</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;