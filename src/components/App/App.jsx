import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import AddPage from 'pages/AddPage/AddPage';
import Layout from 'components/Layout/Layout';
import Page404 from 'pages/Page404/Page404';
import Login from 'pages/LoginPage/LoginPage';
import Register from 'pages/RegisterPage/RegisterPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/auth.reducer';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk);
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts/404" element={<Page404 />} />
      </Routes>
    </Layout>
  );
};
