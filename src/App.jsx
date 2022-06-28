import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Services from "./components/Services"
import Transactions from "./components/Transactions"
import Footer from "./components/Footer"
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Container>
      <Header/>
      <Welcome/>
      <Services/>
      <Transactions/>
      <Footer/> 
      </Container>
    </div>
  )
}

export default App
