import './App.css'
import { Header, Body, Footer } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NotesPage, NoteDetail } from './pages'
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <Router>
      <div className={`container ${dark === true ? 'dark' : ''}`}>
        <div className='app'>
          <Header dark={dark} toggleDark={toggleDark}/>
          <Route path="/" component={NotesPage} exact />
          <Route path="/note/:id" component={NoteDetail}/>
        </div>
      </div>
    </Router>
  )
}

export default App
