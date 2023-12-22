import React, { Fragment } from 'react'
import './sections.css'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_4 from './Section_4'
import Section_5 from './Section_5'
const Section = () => {
  return (
    <Fragment>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
    </Fragment>
  )
}

export default Section
