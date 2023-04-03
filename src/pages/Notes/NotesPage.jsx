import React from 'react'
import notes from '../../assets/data'
import { ListItem } from '../../components'

const NotesPage = () => {
  return (
    <div>{ notes.map((note, index) => (
        <ListItem key={index} note={note}/>
    )) }</div>
  )
}

export default NotesPage