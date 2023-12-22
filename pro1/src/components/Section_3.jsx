import React, { Fragment } from 'react'
import './sections.css'
const Section_3 = () => {
    return (
        <Fragment>
            <section className='section__3'>
                <div className="container">
                    <div className="section__3_child">
                        <p className='section__3_child_title'>Price Table</p>
                        <p className='section__3_child_text'>We offer competitive price</p>
                        <div className='section__3_child_flexbox'>
                            <div className="flexbox__item">
                                <p className='Free'>Free</p>
                                <p className='text__bar'>Brief price description</p>
                                <div className='summa'>
                                    <p className='number'>0</p>
                                    <div className='dollar'>
                                        <p className='simbol'>$</p>
                                        <p className='month'>Per / month</p>
                                    </div>
                                </div>
                                <div className='all__texts'>
                                    <p>Only 2 operators</p>
                                    <p>Notifications</p>
                                    <p>Landing Pages</p>
                                </div>
                                <button className='section_3_btn'>
                                    Order Now
                                </button>
                            </div>
                            <div className="flexbox__item">
                                <p className='Free'>Standard</p>
                                <p className='text__bar'>Brief price description</p>
                                <div className='summa'>
                                    <p className='number'>5</p>
                                    <div className='dollar'>
                                        <p className='simbol'>$</p>
                                        <p className='month'>Per / month</p>
                                    </div>
                                </div>
                                <div className='all__texts'>
                                    <p>5+ Operators</p>
                                    <p>Notifications</p>
                                    <p>Landing Pages</p>
                                </div>
                                <button className='section_3_btn'>
                                    Order Now
                                </button>
                            </div>
                            <div className="flexbox__item">
                                <p className='Free'>Premium</p>
                                <p className='text__bar'>Brief price description</p>
                                <div className='summa'>
                                    <p className='number'>10</p>
                                    <div className='dollar'>
                                        <p className='simbol'>$</p>
                                        <p className='month'>Per / month</p>
                                    </div>
                                </div>
                                <div className='all__texts'>
                                    <p>10+ Operators</p>
                                    <p>Notifications</p>
                                    <p>Landing Pages</p>
                                </div>
                                <button className='section_3_btn'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Section_3
