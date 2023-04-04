import React, { useState, useEffect } from 'react'

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
    <div>
      <p>{note?.body}</p>
    </div>
  )
}

export default NoteDetail;