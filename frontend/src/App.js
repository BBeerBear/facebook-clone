import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authentication from './pages/Authentication';
import HomePage from './pages/Home';
import { action as logoutAction } from './pages/Logout';
import Profile from './pages/Profile';
import RootLayout from './pages/Root';
import { tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: tokenLoader,
    children: [
      { index: 'true', element: <HomePage /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  { path: '/auth', element: <Authentication /> },
  { path: '/logout', action: logoutAction },

  // {path:'/activate/:activateId',element:}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
