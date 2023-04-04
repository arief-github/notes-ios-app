import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const NoteDetail = ({ match }) => {
  let id = match.params.id;
  
  let [note, setNote] = useState(null);

  const getNote = async () => {
    let response = await fetch(`http://localhost:3000/notes/${id}`)
    let data = await response.json();

    setNote(data);
  }

  useEffect(() => {
    getNote();
  }, [id])

  return (
    <div className='note'>
      <div className='note-header'>
        <Link to="/">
          <FaArrowLeft/>
        </Link>
      </div>
      <p>{note?.body}</p>
    </div>
  )
}

export default NoteDetail;