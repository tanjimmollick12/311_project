import React, { useState, useEffect } from 'react'
import './Login.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import ResetPw from '../resetPw/ResetPw';
import {login} from '../../../actions/adminActions'
function Login({location,history}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const adminLogin = useSelector((state) => state.adminLogin)
  const { loading, error, adminInfo } = adminLogin

  const redirect = location.search ? location.search.split('=')[1] : '/admindashboard'

  useEffect(() => {
    if (adminInfo) {
      history.push(redirect)
    }
  }, [history, adminInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  console.log(adminInfo)
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              <div className='form-inputs' >

                <label className='form-label' > Password </label>

                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <LinkContainer to='/admindashboard'>
                <button className='form-input-btn' type='submit' 
                onClick={submitHandler}>Sign in </button>
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
