import React, { Fragment } from 'react'
import './hero.css'
import amico from '../assets/amico.png'
const Hero = () => {
    return (
        <Fragment>
            <div className="hero">
                <div className="container">
                    <div className="header__hero">
                        <div className="header__hero__left__title">
                            <h1>Work at the speed <br /> of thought</h1>
                            <p className='text'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                            <div className='header__hero__left__title__btns'>
                                <button className='header__hero__left__title__btns__one'>Get started</button>
                                <button className='header__hero__left__title__btns__two'>
                                    <i className='bx bx-play'></i>
                                    <p>Watch the Video</p>
                                </button>
                            </div>
                        </div>
                        <img src={amico} alt="img" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Hero
