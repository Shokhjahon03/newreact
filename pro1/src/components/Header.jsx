import React, { Fragment } from 'react'
import logotip from '../assets/Group190.svg'
import logo from '../assets/Product.svg'
import './header.css'
import Navbar_btns from './Navbar_btns'
import Hero from './Hero'
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
                                    <li><a className="navbar__main__menu__links" href="/">Product</a></li>
                                    <li><a className="navbar__main__menu__links" href="/">Customers</a></li>
                                    <li><a className="navbar__main__menu__links" href="/">Pricing </a></li>
                                    <li><a className="navbar__main__menu__links" href="/">Resources</a></li>
                                </ul>
                                <Navbar_btns />
                            </div>
                        </div>
                    </div>
                </nav>
                <Hero />
            </header>
        </Fragment>
    )
}

export default Header
