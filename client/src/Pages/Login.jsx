import React, { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const Login = () => {
  const {user}=useContext(AuthContext)

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/user/login", { email, password });
      console.log(res.data);
      
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    
    <Container>
    <Row className="justify-content-md-center">
      <Col md="6">
        <h2 className="my-4">Signup</h2>
       
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className='mt-4'>
            Signup
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default Login
