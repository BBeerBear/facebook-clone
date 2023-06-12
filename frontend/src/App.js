import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/profile', element: <Profile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
