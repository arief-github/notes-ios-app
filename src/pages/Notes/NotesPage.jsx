import React, { useState, useEffect } from 'react';
import { ListItem } from '../../components'

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    let response = await fetch('http://localhost:3000/notes');
    let data = await response.json();
    setNotes(data)
  }

  // API CALL
  useEffect(() => {
    getNotes();
  }, [])

  return (
    <section className='note'>
      <div className="note-header">
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
          { notes.map((note, index) => (
            <ListItem key={index} note={note}/>
        )) }
      </div>
    </section>
  )
}

export default NotesPage