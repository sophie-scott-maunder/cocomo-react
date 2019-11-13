  
import React from 'react'
// import Product from './Product'
// import Order from './Order'
import { HashRouter as Router, Route } from 'react-router-dom'




import NavbarPage from './NavbarPage'
import HomePage from './Home'

const App = () => {
  return (
    <div>
      <Router>
        <React.Fragment>
          <NavbarPage />
          <Route path='/' component={HomePage} />
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App
