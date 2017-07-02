import React from 'react'

import './Header.css'

const Header = (props) => {
  return (
    <div>
      <img className='fcc-logo' src='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg' alt='FreeCodeCamp logo' />
      <h1 className ='header-title'>Points Leader Board</h1>
    </div>
  )
}

export default Header
