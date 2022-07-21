import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
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
                <Link to="/"><div className=''>
                    <img className='logo'
                        src={Logo}
                        alt="logo"
                    />
                </div></Link>
                <nav className="navbar-desktop">

                    <div className="">
                        <Link to="/">HOMEPAGE</Link>
                        <Link to="/about">ABOUT ME</Link>
                        <Link to="/contact">CONTACTS</Link>
                    </div>
                </nav>
            </div>
            <nav className={active ? "side-is-active , mobileNav" : "side-not-active mobileNav"} >
                <Link to="/" onClick={handleHamburger}>HOMEPAGE</Link>
                <Link to="/about" onClick={handleHamburger}>ABOUT ME</Link>
                <Link to="/contact" onClick={handleHamburger}>CONTACTS</Link>
            </nav>
        </div>
    );
}

export default Navbar;