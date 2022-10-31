import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/" className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;