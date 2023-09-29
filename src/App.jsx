import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'  
import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'

function App() {

  return (
    <>
      <Route path='/header' component={Header}/>
      <Route path='/footer' component={Footer}/>
    </>
  )
}

export default App
