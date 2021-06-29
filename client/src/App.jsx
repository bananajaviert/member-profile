import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import './css/style.css'
// Components
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'
import Profile from './components/Profile'

function App() {
  const [members, set_members] = useState()

  useEffect(() => {
    const get_all = async () => {
      const res = await axios.get('/api/members')
      const data = await res.data

      set_members(data)
    }
    get_all()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='body'>
          <Route exact path='/' render={props => (
            <List {...props} members={members}/>
          )}/>
          <Route path='/create' component={Form}/>
          <Route path='/profile/:id' render={props => (
            <Profile {...props} members={members} set_members={set_members}/>
          )}/>
        </div>
      </div>
    </Router>
  )
}

export default App
