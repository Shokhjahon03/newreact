import React, { Fragment } from 'react'
import './sections.css'
import imgbg from '../assets/image bg.svg'
import btimg from '../assets/Bitmap.svg'
const Section_2 = () => {
    return (
        <Fragment>
            <section className='section__2'>
                <div className="container">
                    <div className="section__2__context">
                        <h2 className='section__2__title'>Contents Strategies</h2>
                        <p className='section__2__text'>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                        <div className='section__2__context__cards'>
                            <div className='section__2__context__cards__incard'>
                                <img className='cards__img' src={imgbg} alt="img" />
                                <p className='texts'>By <span className='incard__span'>Wahid Ari</span> |  03 March 2019</p>
                                <p className='titles'>Increasing Prosperity With Positive Thinking</p>
                            </div>
                            <div className='section__2__context__cards__incard'>
                                <img className='cards__img' src={btimg} alt="img" />
                                <p className='texts'>By <span className='incard__span'>Wahid Ari</span> |  03 March 2019</p>
                                <p className='titles'>Motivation Is The First Step To Success</p>
                            </div>
                            <div className='section__2__context__cards__incard'>
                                <img className='cards__img' src={imgbg} alt="img" />
                                <p className='texts'>By <span className='incard__span'>Wahid Ari</span> |  03 March 2019</p>
                                <p className='titles'>Success Steps For Your Personal Or Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Section_2
