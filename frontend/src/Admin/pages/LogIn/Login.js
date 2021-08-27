import React from 'react'
import './Login.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header'
import ResetPw from '../resetPw/ResetPw';
function Login() {
  return (
    <div >
      <Header />
      <div className='justify-container'>

        <div className='sign-in1'>
          <span className='sign-in2'>
            <div className='form'>
              <span>
                Sign In As Admin
              </span>
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
              <LinkContainer to='/admindashboard'>
                <button className='form-input-btn' type='submit' >Sign in </button>
              </LinkContainer>
              <span className='form-input-login' >
                Forgotten Password ? Click < Link to='/resetpw' > here </Link>
              </span>

            </div>
          </span>
        </div>
      </div >
    </div>
  )
}

export default Login
