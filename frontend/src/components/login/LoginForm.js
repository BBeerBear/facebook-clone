import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import LoginInput from '../inputs/loginInput';
import { useState } from 'react';
import DotLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const loginInfos = {
  email: '',
  password: '',
};
export default function LoginForm({ setVisible }) {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        { email, password }
      );

      dispatch(userActions.login(data));
      Cookies.set('user', JSON.stringify(data));
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

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
            onSubmit={() => {
              loginSubmit();
            }}
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
          {error && <div className='error_text'>{error}</div>}
          <DotLoader color='#1876f2' loading={loading} size={30} />
          <div className='sign_splitter'></div>
          <button
            className='blue_btn open_signup'
            onClick={() => {
              setVisible(true);
            }}
          >
            Create new account
          </button>
        </div>
        <Link to='/' className='sign_extra'>
          <b>Create a Page </b>
          for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}
