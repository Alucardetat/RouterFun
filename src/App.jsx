import { useState } from 'react'
import { Routes, Route, useOutlet } from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Center from './Components/Center/Center'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Layout from './Components/Layout/Layout'
import Left from './Components/Left/Left'
import Nav from './Components/Nav/Nav'
import Right from './Components/Right/Right'
import './App.css'

function App() {

  return (
    <>
      <div id='routeContainer'>
        <Header /> 
        <div id='routeSubCont' style={{display: "flex", flexDirection: "row", width: "100%", height: "100%", border: "yellow solid 2px"}}>
        <Left />
        <Center />
        <Right />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
