import React from 'react'
import { useOutlet } from 'react-router-dom'
import Landing from '../Landing/Landing'
import './center.css'

const Center = () => {

  const outlet = useOutlet();

  return (
    <>
      {console.log('outlet', outlet ? true : false)}

      <div id='centerContainer' className='routerBorder'>

        {/* <h1>center</h1> */}
        {outlet ? outlet : <Landing />}

      </div>
    </>
  )
}

export default Center