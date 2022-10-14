import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          {/* in react-router-dom 6 you can have anything that's not a route in the tag <Routes> */}
          <Routes>
            <Route path="/" element= {<Dashboard />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/register" element= {<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App