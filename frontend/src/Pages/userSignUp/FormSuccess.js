import React from 'react';
import Header from '../../components/Header'
import './form.css';

const FormSuccess = () => {
  return (
    <div className='justify-container'>
      <Header/>

      <div className='emailsent1'>
        <span className='emailsent2'>
          We have sent verification code to your email,
          Please Follow that link to active your account.
          <br />
          Thank You!
        </span>
        
      </div>
     
    </div>
  );
};

export default FormSuccess;