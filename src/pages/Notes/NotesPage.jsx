import React from 'react'
import notes from '../../assets/data'
import { ListItem } from '../../components'

const NotesPage = () => {
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