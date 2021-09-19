import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../LogIn/FormContainer'
import { register } from '../../../actions/adminActions'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_Confirmation] = useState("")
    const [message, setMessage] = useState(null)
    let data = { name, email, password, password_confirmation }

    const dispatch = useDispatch()
    //const adminRegister = useSelector((state) => state.userRegister)

    const submitHandler = (e) => {


        e.preventDefault()
        if (password !== password_confirmation) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password, password_confirmation))
        }

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
                        value={name} onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={password_confirmation} onChange={(e) => setPassword_Confirmation(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br />
                {/* <Link to='/emailsent'> */}
                <Button type='submit' variant='primary' onClick={submitHandler}>
                    Register


                </Button>

                {/* </Link> */}



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
