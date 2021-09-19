import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './form.css';
import { LinkContainer } from 'react-router-bootstrap';
import { register } from '../../actions/userActions'
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
const FormSignUp = ({ location, history }) => {
  const [f_name, setf_name] = useState('')
  const [l_name, setl_name] = useState('')
  const [gender, setGender] = useState('')
  const [DOB, onChange] = useState(new Date())
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const userInfo = userRegister

  // const data ={f_name, l_name, gender,contact,email,password,password_confirmation}

  const submitHandler = (e) => {
    

    e.preventDefault()
    if (password !== password_confirmation) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(f_name, l_name, gender, contact, email, password, password_confirmation))
    }

  }


  return (
    <>
      <Header />
      <div className='form-container'>
        <LinkContainer to='/'>
          <span className='close-btn'>×</span>

        </LinkContainer>

        <div className='form-content-right' >

          <form onSubmit
            className='form'
            noValidate>
            {/* {data.message && <Message variant='danger'>{data.message}</Message>}
{data.message && <Message variant='danger'>{data.message}</Message>}
{loading && <Loader />} */}

            <span style={{ color: 'green' }}>
              Get started with us today!Create your account by filling out the information below.

            </span>
            <div className='form-inputs'>
              <br />

              <label className='labeld' > Name </label>
              <div>


                <input className='form-input-name'
                  type='text'
                  name='username'
                  placeholder='First Name'
                  value={f_name}
                  onChange={(e) => setf_name(e.target.value)}
                />

                <input className='form-input-name2'
                  type='text'
                  name='username'
                  placeholder='Last Name'
                  value={l_name}
                  onChange={(e) => setl_name(e.target.value)}
                />

              </div>


            </div>
            <div className='form-inputs'>

              <label className='labeld' > Email </label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-inputs'>

              <label className='labeld' > Contact </label>
              <input
                className='form-input'
                type='text'
                name='contact'
                placeholder='Enter your Contact'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>



            <div className='form-inputs' >

              <label className='labeld' > Gender </label>
              <div className='radio' >


                <input type="radio" value="Male" name="gender"

                  onChange={(e) => setGender(e.target.value)} /> Male

                <input type="radio" value="Female" name="gender"
                  onChange={(e) => setGender(e.target.value)} /> Female

              </div>
            </div>


            <div className='form-inputs' >

              <label className='labeld' > Password </label>

              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='form-inputs' >

              <label className='labeld' > Confirm Password </label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={password_confirmation}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <LinkContainer to='/emailsent'>
              <button className='form-input-btn' type='submit' onClick={submitHandler}>Sign up </button>
            </LinkContainer>

            <span className='form-input-login' >
              Already have an account ? Login < Link to='/login' > here </Link>
            </span>

          </form>
        </div>

      </div>
    </>

  )
}

export default FormSignUp;