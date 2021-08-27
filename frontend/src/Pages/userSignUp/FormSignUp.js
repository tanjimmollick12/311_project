import React,{useState} from 'react';
import validate from './validateInfo';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import DatePicker from 'react-date-picker';
import './form.css';
import { LinkContainer } from 'react-router-bootstrap';

const FormSignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, } = useForm(
    submitForm,
    validate
  );
  const [value, onChange] = useState(new Date());

  return (
    <div className='form-content-right' >

      <form onSubmit={handleSubmit}
        className='form'
        noValidate>

        <span style={{ color:'green' }}>
          Get started with us today!Create your account by filling out the information below.
          </span>
        <div className='form-inputs'>

          <label className='labeld' > Name </label>
          <div>


            <input className='form-input-name'
              type='text'
              name='username'
              placeholder='First Name'
              value={values.username}
              onChange={handleChange}
            />

            <input className='form-input-name2'
              type='text'
              name='username'
              placeholder='Last Name'
              value={values.username}
              onChange={handleChange}
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
            value={values.email}
            onChange={handleChange}
          />
        </div>


        <div className='form-inputs' >

          <label className='labeld' > Gender </label>
          <div className='radio' >


            <input type="radio" value="Male" name="gender" /> Male

            <input type="radio" value="Female" name="gender" /> Female

          </div>
        </div>



        <div className='form-inputs' >

          <label className='labeld' > Date Of Birth </label>
          <div className='radio'>
            <DatePicker
              onChange={onChange}
              value={value}
            />
          </div>
        </div>

          <div className='form-inputs' >

            <label className='labeld' > Password </label>

            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div className='form-inputs' >

            <label className='labeld' > Confirm Password </label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
          </div>
          <LinkContainer to='/emailsent'>
          <button className='form-input-btn' type='submit' >Sign up </button>
          </LinkContainer>
         
          <span className='form-input-login' >
            Already have an account ? Login < Link to='/login' > here </Link>
          </span>

      </form>
    </div>
      );
};

      export default FormSignUp;