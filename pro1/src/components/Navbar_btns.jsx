import React from 'react'
import './navbar__btns.css'

const Navbar_btns = () => {
    return (
        <div className="navbar__main__btns">
            <button className="navbar__main__btn">Sign In</button>
            <button className="navbar__main__btn">Sign Up</button>
            <button className="navbar__main__darkmod"><i className='bx bx-adjust'></i></button>
        </div>
    )
}

export default Navbar_btns
