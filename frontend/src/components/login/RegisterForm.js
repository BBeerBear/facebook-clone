import { Form, Formik } from 'formik';
import { useState } from 'react';
import RegisterInput from '../inputs/registerInput';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function RegisterForm() {
  const userInfos = {
    first_name: '',
    last_name: '',
    mobile_or_email: '',
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
    mobile_or_email,
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
    email: Yup.string,
  });
  return (
    <div className='blur'>
      <div className='register'>
        <div className='register_header'>
          <i className='exit_icon'></i>
          <span>Sign Up</span>
          <span>It’s quick and easy.</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={user}
          validationSchema={registerValidation}
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
                  placeholder='Last name'
                  type='text'
                  name='last_name'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  placeholder='Mobile number or email'
                  type='text'
                  name='mobile_or_email'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  placeholder='New password'
                  type='password'
                  name='mobile_or_email'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Birthday <i className='info_icon'></i>
                </div>
                <div className='reg_grid'>
                  <select
                    name='bMonth'
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((month, i) => (
                      <option key={i} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name='bDay'
                    value={bDay}
                    onChange={handleRegisterChange}
                  >
                    {days.map((day, i) => (
                      <option key={i} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name='bYear'
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year, i) => (
                      <option key={i} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Gender <i className='info_icon'></i>
                </div>
                <div className='reg_grid'>
                  <label htmlFor='female'>
                    Female
                    <input
                      type='radio'
                      name='gender'
                      id='female'
                      value='female'
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor='male'>
                    Male
                    <input
                      type='radio'
                      name='gender'
                      id='male'
                      value='male'
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor='male'>
                    Unknown
                    <input
                      type='radio'
                      name='gender'
                      id='unknown'
                      value='unknown'
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
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
                <button className='blue_btn open_signup'>Sign Up</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
