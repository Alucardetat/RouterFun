import React from 'react'
import './Right.css'


const Right = ({children}) => {
  return (
    <>
      <div id='routeRight' className='routerBorder'> Right

        {children}
      </div>
    </>
  )
}

export default Right