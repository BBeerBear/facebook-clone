import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authentication from './pages/Authentication';
import HomePage from './pages/Home';
import { action as logoutAction } from './pages/Logout';
import Profile from './pages/Profile';
import RootLayout from './pages/Root';
import { checkTokenLoaderInMain, checkTokenLoaderInAuth } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: checkTokenLoaderInMain,
    children: [
      { index: 'true', element: <HomePage /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  {
    path: '/auth',
    element: <Authentication />,
    loader: checkTokenLoaderInAuth,
  },
  { path: '/logout', action: logoutAction },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
