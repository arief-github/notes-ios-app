import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = ({ dark, toggleDark }) => {
  return (
    <header className='app-header'>
      <h1>Notes List</h1>
      <button style={ dark === false ?  { color: 'white'} : { color: '#EBC815' } } onClick={toggleDark}>{ dark === false ? <FaMoon /> : <FaSun/> }</button>
    </header>
  )
}

export default Header;
