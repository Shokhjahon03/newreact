import React, { Fragment } from 'react'
import logotip from '../assets/Group190.svg'
import logo from '../assets/Product.svg'
import './header.css'
const Header = () => {
    return (
        <Fragment>
            <header>
                <nav>
                    <div className="container">
                        <div className="navbar">
                            <div className="logo_div">
                                <img src={logotip} alt="img" />
                                <img src={logo} alt="img" />
                            </div>
                            <div className="navbar__main">
                                <ul className="navbar__main__menu">
                                    <li><a href="/">Product</a></li>
                                    <li><a href="/">Customers</a></li>
                                    <li><a href="/">Pricing </a></li>
                                    <li><a href="/">Resources</a></li>
                                </ul>
                                <button className="">Sign In</button>
                                <button className="">Sign Up</button>
                                <button><i class='bx bxs-adjust-alt'></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header
