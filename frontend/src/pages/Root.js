import Header from '../components/header';
import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit(); // programmatically submit a form

  useEffect(() => {
    setTimeout(() => {
      submit(null, { method: 'POST', action: '/logout' });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
