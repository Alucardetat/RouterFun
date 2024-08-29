import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <>
      <div id='routerHeader' className='routerBorder'>
        <Nav />
      </div>
    </>
  )
}

export default Header