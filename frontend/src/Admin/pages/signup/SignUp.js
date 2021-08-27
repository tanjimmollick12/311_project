
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../LogIn/FormContainer'
const SignUp = () => {

    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form >
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'

                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'

                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'

                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'

                    ></Form.Control>
                </Form.Group>
                <br />
                <Link to='/emailsent'>
                    <Button type='submit' variant='primary'>
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
