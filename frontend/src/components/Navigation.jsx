import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navbar(props) {

    const [active, setActive] = useState(false);

    const handleHamburger = () => {
        setActive(!active)
    };

    const body = document.querySelector('body');
    active ? body.style.overflowY = "hidden" : body.style.overflowY = "initial";

    return (

        <div className="navbar-container">
            <button className={active ? "burger-is-active , hamburger" : "hamburger"} onClick={handleHamburger}>
                <div className="bar"></div>
            </button>
            <div className='navbar_logo'>
                <Link to="/"><div className='logo'>LOGO</div></Link>
                <nav className="navbar-desktop">

                    <div className="">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </nav>
            </div>
            <nav className={active ? "side-is-active , mobileNav" : "mobileNav"} >
                <Link to="/" onClick={handleHamburger}>Home</Link>
                <Link to="/profile" onClick={handleHamburger}>Profile</Link>
                <Link to="/login" onClick={handleHamburger}>Login</Link>
                <Link to="/signup" onClick={handleHamburger}>SignUp</Link>
            </nav>
        </div>
    );
}

export default Navbar;