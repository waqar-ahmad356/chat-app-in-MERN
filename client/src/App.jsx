import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './Pages/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from 'react-bootstrap'
import Login from './Pages/Login'
import Chat from "./Pages/Chat"
import NavBar from './Components/NavBar'


const App = () => {
  return (
    
    <>
    <NavBar/>
    <Container>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Chat/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </Container>
      
    </>
  )
}

export default App
