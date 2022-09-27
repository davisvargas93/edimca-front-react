import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button} from 'react-bootstrap'; 
import { porductsApi } from '../api/PorductsApi';



export function Login() {
    let [login,setLogin] = useState({});
    function changeInput(e){
        setLogin({
          ...login,
          [e.target.name]: e.target.value
        });
      }

      async function send(){
        const result = await porductsApi.post('http://localhost:8080/api/v1/validUser',login);
        console.log(result);
      }
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="user">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="user" placeholder="Enter email" value={login.user} name="user" onChange={changeInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  value={login.password} name="password" onChange={changeInput} />
            </Form.Group>
            <Button variant="primary" onClick={()=>{send()}} >
                Sign in 
            </Button>
        </Form>
    </Container>
  );
}

