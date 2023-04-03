import './App.css'
import { Header, Body, Footer } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NotesPage, NoteDetail } from './pages'

function App() {
  return (
    <Router>
        <Header/>
        <Route path="/" component={NotesPage} exact />
        <Route path="/note/:id" component={NoteDetail}/>
    </Router>
  )
}

export default App
