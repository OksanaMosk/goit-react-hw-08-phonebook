import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/auth.reducer';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import AddPage from 'pages/AddPage/AddPage';
import Layout from 'components/Layout/Layout';
import Page404 from 'pages/Page404/Page404';
import Login from 'pages/LoginPage/LoginPage';
import Register from 'pages/RegisterPage/RegisterPage';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import * as ROUTES from '../constants/routes';

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.ADD_ROUTE,
    element: (
      <PrivateRoute>
        <AddPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.ERROR_ROUTE,

    element: (
      <RestrictedRoute>
        <Page404 />
      </RestrictedRoute>
    ),
  },
];
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk);
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Layout>
  );
};

//  <Route path="/" element={<HomePage />} />
//         <Route path="/add" element={<AddPage />} />
//         <Route path="/contacts" element={<ContactsPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contacts/404" element={<Page404 />} />
