import React from 'react';

import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './ContactsPage.module.css';
import { useRef } from 'react';
import Page404 from 'pages/Page404/Page404';
// import { Navigate } from 'react-router-dom';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const isLoading = useSelector(state => state.contactsStore.isLoading);
  // const error = useSelector(state => state.contactsStore.error);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  <Routes>
    <Route path="/contacts/404" element={<Page404 />} />
  </Routes>;

  return (
    <div className={css.contacts}>
      {/* {error !== null && <Navigate to="/contacts/404" replace={true} />} */}
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go back
      </NavLink>
      {isLoading && <Loader className={css.loader} />}

      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.noContacts}>
          Your phonebook is empty. Add your first contact!
        </p>
      )}
    </div>
  );
};
export default ContactsPage;
