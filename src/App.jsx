import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Help from './pages/Help';

const router = createBrowserRouter([
  { path: "/", element: <Layout><Welcome /></Layout> },
  { path: "/login", element: <Layout><Login /></Layout> },
  { path: "/register", element: <Layout><Register /></Layout> },
  { path: "/home", element: <Layout><Home /></Layout> },
  { path: "/help", element: <Layout><Help /></Layout> },
  { path: "/profile", element: <Layout><Profile /></Layout> },
  { path: "*", element: <Layout><NotFound /></Layout> }, 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;