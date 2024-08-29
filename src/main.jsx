import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Center from './Components/Center/Center'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Left from './Components/Left/Left'
import Nav from './Components/Nav/Nav'
import Right from './Components/Right/Right'
import Blog from './Components/Blog/Blog'
import Messages from './Components/Messages/Messages.jsx'
import Landing from './Components/Landing/Landing.jsx'
import Layout from './Components/Layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<App />}>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='messages' element={<Messages />}></Route>
        </Route>
        


      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
