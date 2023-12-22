import React, { Fragment } from 'react'
import './sections.css'
import star from '../assets/stars.svg'
import woman from '../assets/Ellipse 2.svg'
const Section_4 = () => {
    return (
        <Fragment>
            <section className='section_4'>
                <div className="container">
                    <div className='settion_4__child'>
                        <p className='tion4_title'>What Clients Say</p>
                        <p className='tion4_text'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
                        </p>
                        <dir className='tion4_flexbox'>
                            <div className='tion4_flexbox_item'>
                                <img src={star} alt="img" />
                                <p className='item__text'>Product helps you see how many more days you need to work to reach your financial goal.</p>
                                <div className='biger'>
                                    <img src={woman} alt="img" />
                                    <div className='mini'>
                                        <p className='gren'>Wahid Ari</p>
                                        <p className='blue'>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='tion4_flexbox_item'>
                                <img src={star} alt="img" />
                                <p className='item__text'>Product helps you see how many more days you need to work to reach your financial goal.</p>
                                <div className='biger'>
                                    <img src={woman} alt="img" />
                                    <div className='mini'>
                                        <p className='gren'>Wahid Ari</p>
                                        <p className='blue'>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='tion4_flexbox_item'>
                                <img src={star} alt="img" />
                                <p className='item__text'>Product helps you see how many more days you need to work to reach your financial goal.</p>
                                <div className='biger'>
                                    <img src={woman} alt="img" />
                                    <div className='mini'>
                                        <p className='gren'>Wahid Ari</p>
                                        <p className='blue'>Designer</p>
                                    </div>
                                </div>
                            </div>
                        </dir>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Section_4
