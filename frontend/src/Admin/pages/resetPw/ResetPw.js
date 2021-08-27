import React from 'react'
import Header from '../../../components/Header'
import { Form, Button,} from 'react-bootstrap'
import FormContainer from '../LogIn/FormContainer'
function ResetPw() {
    return (
        <div>

            <Header/>
      
        <FormContainer>
            
            <h2>Reseting Password</h2>
            <Form >
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'

                    ></Form.Control>
                </Form.Group>
            </Form>
            <br/>
        <Button type='submit' variant='primary'>
          Send Code
        </Button>


        </FormContainer>
        </div>
    )
}

export default ResetPw
