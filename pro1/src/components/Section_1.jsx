import React, { Fragment } from 'react'
import './sections.css'
// import shadov from '../assets/shadow.png'
import icon1 from '../assets/icon.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
const Section_1 = () => {

    return (
        <Fragment>
            <section id='imgs' className='section_1'>
                <div className="container">
                    <div className="section_1__box">
                        <h2 className='section_1__box__title'>
                            Product  was Built Specifically <br /> for You
                        </h2>
                        <div className='section_1__box__'>
                            <div className="section__cards">
                                <img src={icon1} alt="img" />
                                <h3>First click tests</h3>
                                <p>While most people enjoy casino gambling,</p>
                            </div>
                            <div className="section__cards">
                                <img src={icon2} alt="img" />
                                <h3>Design surveys</h3>
                                <p>Sports betting, lottery and bingo playing for the fun</p>
                            </div>
                            <div className="section__cards">
                                <img src={icon3} alt="img" />
                                <h3>Preference tests</h3>
                                <p>The Myspace page defines the individual.</p>
                            </div>
                            <div className="section__cards">
                                <img src={icon4} alt="img" />
                                <h3>Five second tests</h3>
                                <p>Personal choices and the overall personality of the person. </p>
                            </div>
                        </div>
                        <button className='section_1__box__btn'>
                            SIGN UP NOW
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Section_1
