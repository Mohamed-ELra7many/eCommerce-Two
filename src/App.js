import React from 'react'
import Products from './components/Products/Products'
import "./App.css"
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart'
import Darkmode from './components/DarkMode/Darkmode'

const Container = styled.div` 
margin: 0 auto;
padding: 0 30px;
`
const App = () => {
  return (
    <Container>
      <Navbar />
      <Darkmode />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <Details />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
