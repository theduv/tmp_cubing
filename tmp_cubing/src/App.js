import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import NotFound from './Components/NotFound'

function App() {
  return (
    <div className='app-main'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/' component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
