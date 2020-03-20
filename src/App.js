import React, { Component } from 'react'
import './App.css';
import Home from './Home/Home.js'
import NavBar from './NavBar/NavBar.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar /> 
        <Home /> 
      </div>
    )
  }
}

