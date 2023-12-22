import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'

function App() {


  return (
    <Fragment>
      <div className="container">
        <Header />
      </div>

      <Section />

    </Fragment>
  )
}

export default App
