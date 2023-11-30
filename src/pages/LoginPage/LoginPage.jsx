import book2 from 'images/icons8-add-a-new-contact-on-modern-cell-phone-96.png';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth selectors';
import { useSelector } from 'react-redux';

import photo1 from 'images/icons8-phonebook-96.png';
import photo2 from 'images/icons8-add-a-new-contact-on-modern-cell-phone-96.png';
import HomePage from 'pages/HomePage/HomePage';

const Login = () => {
  const authenticated = useSelector(selectAuthenticated);
  const location = useLocation();
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };

  return (
    <div className={css.login}>
      {authenticated ? (
        <HomePage />
      ) : (
        <form className={css.form} onSubmit={onSubmit}>
          <label>
            <p className={css.inputName}>Email</p>
            <input
              type="email"
              placeholder="Email"
              className={css.formInput}
              required
              name="userEmail"
            ></input>
          </label>
          <label>
            <p className={css.inputName}>Password</p>
            <input
              type="password"
              className={css.formInput}
              placeholder="********"
              required
              name="userPassword"
              minLength={7}
            ></input>
          </label>
          <button type="submit" className={css.submitButton}>
            <img
              src={book2}
              alt="{book2}"
              className={css.book_2}
              width={100}
              height={100}
            ></img>
          </button>
        </form>
      )}
    </div>
  );
};
export default Login;
