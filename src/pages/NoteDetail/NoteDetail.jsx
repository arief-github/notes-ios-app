import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaHandLizard, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const NoteDetail = ({ match, history }) => {
  let id = match.params.id;

  let [note, setNote] = useState(null);

  const getNote = async () => {

    if(id === 'new') return;

    let response = await fetch(`http://localhost:3000/notes/${id}`)
    let data = await response.json();

    setNote(data);
  }

  useEffect(() => {
    getNote();
  }, [id])

  // update the single note
  const updateNote = async () => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }
  
  const createNote = async () => {
    await fetch(`http://localhost:3000/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

  const deleteNote = async () => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })

    history.push("/")
  }

  const handleSubmit = () => {
    if (id != 'new' && !note.body) {
      deleteNote()
    } else if (id != 'new') {
      updateNote()
    } else if (id  === 'new' && note !== null) {
      createNote();
    }

    history.push("/")
  }


  return (
    <div className='note'>
      <div className='note-header'>
        <Link to="/">
          <FaArrowLeft onClick={handleSubmit} />
        </Link>
        {
          id !== 'new' ? (<button onClick={deleteNote}>Delete <FaTrash /> </button>
          ) : (<button onClick={handleSubmit}>Done</button>)
        }
      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} value={note?.body}></textarea>
    </div>
  )
}

export default NoteDetail;