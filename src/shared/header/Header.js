import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("singnOut successful")
            })
            .catch(err => console.log(err))
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {/* <li><Link to='/register'>Register</Link></li> */}


        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/login'>Login</Link></li>
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
                {
                    user?.email && <button onClick={handleLogOut} className="btn">Log Out</button>
                }
            </div>
        </div>
    );
};

export default Header;