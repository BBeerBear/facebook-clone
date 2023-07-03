import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ActivatePage, { loader as activateLoader } from './pages/Activate';
import Authentication from './pages/Authentication';
import HomePage from './pages/Home';
import { action as logoutAction } from './pages/Logout';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import { checkTokenLoaderInAuth, checkTokenLoaderInMain } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: checkTokenLoaderInMain,
    children: [
      { index: 'true', element: <HomePage /> },
      { path: 'profile', element: <ProfilePage /> },
      {
        path: 'activate/:token',
        element: <ActivatePage />,
        loader: activateLoader,
      },
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
