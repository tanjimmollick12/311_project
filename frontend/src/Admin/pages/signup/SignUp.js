
import { Link } from 'react-router-dom'
import React, { useState,  } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../LogIn/FormContainer'
const SignUp = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [password_confirmation,setPassword_Confirmation]=useState("")
function saveUser(){

    console.log({name,email,password,password_confirmation})
    let data = {name,email,password,password_confirmation}
    fetch("http://127.0.0.1:8000/api/register",{
        method:'post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        console.log("result",result)
        console.log(Response)
            
    })
}


    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form >
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                       value={name} onChange={(e)=>setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={password_confirmation} onChange={(e)=>setPassword_Confirmation(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br />
                <Link to='/emailsent'>
                <Button type='submit' variant='primary' onClick={saveUser}>
                    Register
                </Button>
                </Link>



            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link to={'/adminlogin'}>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default SignUp
