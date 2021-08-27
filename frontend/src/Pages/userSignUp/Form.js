import React, { useState } from 'react';
import './form.css';
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess';
import Header from '../../components/Header';
import { LinkContainer } from 'react-router-bootstrap';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Header />
      <div className='form-container'>
        <LinkContainer to='/'>
          <span className='close-btn'>×</span>

        </LinkContainer>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;