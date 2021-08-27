import React from 'react'
import './signin.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
function SignIn() {
  return (
    <div >
      <Header />
      <div className='justify-container'>

        <div className='sign-in1'>
          <span className='sign-in2'>
            <div className='form'>
              <LinkContainer to='/'>
                <span>
                  Sign In to 'Company Name'
                </span>

              </LinkContainer>

              <div className='form-inputs'>

                <label className='form-label' > Email </label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your email'

                />
              </div>
              <div className='form-inputs' >

                <label className='form-label' > Password </label>

                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'

                />
              </div>
              
              <LinkContainer to='/username'>
                <button className='form-input-btn' type='submit' >Sign in </button>
              </LinkContainer>
              <span className='form-input-login' >
                Forgotten Password ? Click < Link to='/resetpw' > here </Link>
              </span>
              <span className='form-input-signup' >
                Need Account ? Click < Link to='/usersignup' > here </Link>
              </span>
            </div>
          </span>
        </div>
      </div >
    </div>
  )
}

export default SignIn
