import { Form, Formik } from 'formik';
import { useState } from 'react';
import RegisterInput from '../inputs/registerInput';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import GenderSelect from './GenderSelect';
import DateOfBirthSelect from './DateOfBirthSelect';
import DotLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm({ setVisible }) {
  const userInfos = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: '',
  };
  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => bYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("What's your name?")
      .min(2, 'First name must be between 2 and 16 characters')
      .max(16, 'First name must be between 2 and 16 characters')
      .matches(
        /^[aA-zZ\s]+$/,
        'Numbers and special characters are not allowed'
      ),
    last_name: Yup.string()
      .required("What's your name?")
      .min(2, 'First name must be between 2 and 16 characters')
      .max(16, 'First name must be between 2 and 16 characters')
      .matches(
        /^[aA-zZ\s]+$/,
        'Numbers and special characters are not allowed'
      ),
    email: Yup.string()
      .required(
        "You'll use this when you log in and if you ever need to reset your password."
      )
      .email('Enter a valid email address'),
    password: Yup.string()
      .required(
        'Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).'
      )
      .min(6, 'Pssword must be at least 6 characters.')
      .max(36, "Password can't be more than 36 characters."),
  });
  const [dateError, setDateError] = useState('');
  const [genderError, setGenderError] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }
      );
      setError('');
      setSuccess(data.message);
      const { message, ...rest } = data; // rest is the user data we want to add into the redux store
      setTimeout(() => {
        // wait 2 seconds then do the next code
        dispatch(userActions.login(rest));
        Cookies.set('user', JSON.stringify(rest));
        navigate('/');
      }, 2000);
    } catch (err) {
      setLoading(false);
      setSuccess('');
      setError(err.response.data.message);
    }
  };
  return (
    <div className='blur'>
      <div className='register'>
        <div className='register_header'>
          <i
            className='exit_icon'
            onClick={() => {
              setVisible(false);
            }}
          ></i>
          <span>Sign Up</span>
          <span>It’s quick and easy.</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={user}
          validationSchema={registerValidation}
          onSubmit={() => {
            // Age & Gender validation
            let current_date = new Date();
            let picked_date = new Date(bYear, bMonth, bDay);
            let atleat14 = new Date(1970 + 1, 0, 1);
            let noMoreThan70 = new Date(1970 + 70, 0, 1);
            if (
              current_date - picked_date < atleat14 ||
              current_date - picked_date > noMoreThan70
            ) {
              setDateError(
                'It looks like you entered the wrong info. Please be  sure to use your real birthday.'
              );
            } else if (gender === '') {
              setGenderError(
                'Please choose a gender. You can change who can see this later.'
              );
            } else {
              registerSubmit();
            }
          }}
        >
          {(formik) => (
            <Form className='register_form'>
              <div className='reg_line'>
                <RegisterInput
                  placeholder='First name'
                  type='text'
                  name='first_name'
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  right
                  placeholder='Last name'
                  type='text'
                  name='last_name'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  placeholder='Email'
                  type='text'
                  name='email'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  placeholder='New password'
                  type='password'
                  name='password'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Birthday <i className='info_icon'></i>
                </div>
                <DateOfBirthSelect
                  bYear={bYear}
                  bMonth={bMonth}
                  bDay={bDay}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Gender <i className='info_icon'></i>
                </div>
                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              <div className='reg_infos'>
                <div className='reg_infos_item'>
                  People who use our service may have uploaded your contact
                  information to Facebook. <Link to='/'>Learn more.</Link>
                </div>
                <div className='reg_infos_item'>
                  By clicking Sign Up, you agree to our{' '}
                  <Link to='/'>Terms</Link>, <Link to='/'>Privacy Policy</Link>
                  and <Link to='/'>Cookies Policy</Link>. You may receive SMS
                  Notifications from us and can opt out any time.
                </div>
              </div>
              <div className='btn_wrapper'>
                <button className='blue_btn open_signup' type='submit'>
                  Sign Up
                </button>
              </div>
              {error && <div className='error_text'>{error}</div>}
              {success && <div className='success_text'>{success}</div>}
              <DotLoader
                color='#1876f2'
                loading={loading}
                cssOverride={{}}
                size={30}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
