import React, { useState, useEffect } from 'react'
import './signin.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Header from '../../components/Header';
import { login } from '../../actions/userActions'
function SignIn({location,history}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div >
      <Header />
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
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

              <LinkContainer to='/username'>
                <button className='form-input-btn' type='submit' 
                onClick={submitHandler }>Sign in </button>
              </LinkContainer>
              <span className='form-input-login' >
                Forgotten Password ? Click < Link to='/resetpw' > here </Link>
              </span>
              <span className='form-input-signup' >
                Need Account ? Click <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Here</Link>
              </span>
            </div>
          </span>
        </div>
      </div >
    </div>
  )
}

export default SignIn
