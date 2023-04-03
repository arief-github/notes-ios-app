import React from 'react'
import notes from '../../assets/data';

const NoteDetail = ({ match }) => {
  let id = match.params.id;
  let note = notes.find(note => note.id == id);
  console.log(note.body)

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  )
}

export default NoteDetail;