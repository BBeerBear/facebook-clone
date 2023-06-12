import './style.css';
import { React } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/inputs/loginInput';

export default function Login() {
  return (
    <div className='login_wrapper'>
      <div className='login_wrap'>
        <div className='login_1'>
          <img src='../../icons/facebook.svg' alt='' />
          <span>
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className='login_2'>
          <div className='login_2_wrap'>
            <Formik>
              {(formik) => (
                <Form>
                  <LoginInput
                    placeholder='Email or phone number'
                    type='text'
                    name='email'
                  />
                  <LoginInput
                    placeholder='Password'
                    type='password'
                    name='password'
                  />
                  <button type='submit' className='blue_btn'>
                    Log In
                  </button>
                </Form>
              )}
            </Formik>
            <Link to='/forget' className='forgot_password'>
              Forgot password?
            </Link>
            <div className='sign_splitter'></div>
            <button className='blue_btn open_signup'>Create new account</button>
          </div>
          <Link to='/' className='sign_extra'>
            <b>Create a Page </b>
            for a celebrity, brand or business.
          </Link>
        </div>
      </div>
    </div>
  );
}
