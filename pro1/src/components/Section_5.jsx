import React, { Fragment } from 'react'
import './sections.css'
import scrin from '../assets/screen.svg'
const Section_5 = () => {
    return (
        <Fragment>
            <section className='secton_5'>
                <div className="container">
                    <div className="tion5">
                        <div className='tion5_left'>
                            <p>Join 100 Compannies who boost their business with Product</p>
                            <button>Get This</button>
                        </div>
                        <img src={scrin} alt="img" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Section_5
