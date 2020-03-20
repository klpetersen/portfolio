import React, { Component } from 'react'
import './App.css';
import Home from './Home/Home.js'
import NavBar from './NavBar/NavBar.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className='home-header'> 
          Kayla Petersen
        </h1>
        <NavBar /> 
        <Home /> 
      </div>
    )
  }
}

