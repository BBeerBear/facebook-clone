import { useState } from 'react';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './style.css';

export default function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <div className='login'>
      <div className='login_wrapper'>
        <LoginForm setVisible={setVisible} />
        {visible && <RegisterForm setVisible={setVisible} />}
      </div>
      <Footer />
    </div>
  );
}
