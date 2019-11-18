  
import React from 'react'
// import Product from './Product'
// import Order from './Order'
import { HashRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"



// import NavbarPage from './NavbarPage'
import HomePage from './Home'
import Nav from './NavbarPage'
import ProductPage from './ProductPage'
// import Form from './Form'


const App = () => {
  return (
    <div>
      <Router>
        <React.Fragment>
        <Route path='/' component={Nav} />
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/products/:id' component={ProductPage} />
          {/* <Route exact path='/products/:id' component={Form}/> */}
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App
