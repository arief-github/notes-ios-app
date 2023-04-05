import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus  } from 'react-icons/fa'

const AddButton = () => {
  return (
    <Link to="/note/new" className='floating-button'>
        <FaPlus/>
    </Link>
  )
}

export default AddButton