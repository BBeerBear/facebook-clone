import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import LoginInput from '../inputs/loginInput';
import { useState } from 'react';
const loginInfos = {
  email: '',
  password: '',
};
export default function LoginForm() {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  console.log(login);
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Must be a valid email.')
      .max(100),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className='login_wrap'>
      <div className='login_1'>
        <img src='../../icons/facebook.svg' alt='' />
        <span>Connect with friends and the world around you on Facebook.</span>
      </div>
      <div className='login_2'>
        <div className='login_2_wrap'>
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={loginValidation}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  placeholder='Email or phone number'
                  type='text'
                  name='email'
                  onChange={handleLoginChange}
                />
                <LoginInput
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={handleLoginChange}
                  bottom
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
  );
}
