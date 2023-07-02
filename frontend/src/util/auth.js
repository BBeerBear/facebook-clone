import { redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export function getTokenDuration() {
  const storedExpirationDate = Cookies.get('user').expiration;
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

// check if token not exists, redirect to login page
export function checkTokenLoaderInMain() {
  const token = getAuthToken();
  if (!token || token === 'EXPIRED') {
    return redirect('/auth');
  }
  return null;
}

export function checkTokenLoaderInAuth() {
  const token = getAuthToken();
  if (token && token !== 'EXPIRED') {
    return redirect('/');
  }
  return null;
}
