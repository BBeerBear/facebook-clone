import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpriationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpriationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

// check if token not exists, redirect to login page
export function tokenLoader() {
  const token = getAuthToken();
  const duration = getTokenDuration();

  if (!token || duration < 0) {
    return redirect('/auth');
  }

  return token;
}
