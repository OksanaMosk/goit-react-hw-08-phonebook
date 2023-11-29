import css from './Layout.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <header>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <div className={css.menu}>
          <NavLink state={{ from: location }} to="/"></NavLink>
          <NavLink state={{ from: location }} className={css.title} to="/add">
            Add contact
          </NavLink>
          <NavLink
            state={{ from: location }}
            className={css.title}
            to="/contacts"
          >
            My contacts
          </NavLink>
        </div>
        <div className={css.authorization}>
          <NavLink
            state={{ from: location }}
            className={css.titleAuthorization}
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            state={{ from: location }}
            className={css.titleAuthorization}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
