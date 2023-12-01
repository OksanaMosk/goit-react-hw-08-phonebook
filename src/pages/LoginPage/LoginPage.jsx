import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { loginThunk } from 'redux/auth/auth.reducer';
import { useRef } from 'react';
import book2 from 'images/icons8-add-a-new-contact-on-modern-cell-phone-96.png';
import Loader from 'components/Loader/Loader';
import css from './LoginPage.module.css';

const Login = () => {
  const error = useSelector(state => state.auth.error);
  const isLoadingAuth = useSelector(state => state.auth.isLoadingAuth);
  const location = useLocation();
  const dispatch = useDispatch();
  const backLinkRef = useRef('/');

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
    <>
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go Home
      </NavLink>
      <div className={css.login}>
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
            {isLoadingAuth ? (
              <Loader />
            ) : (
              <img
                src={book2}
                alt="{book2}"
                className={css.book_2}
                width={100}
                height={100}
              ></img>
            )}
          </button>
        </form>
        {error !== null && (
          <span className={css.submitError}>Something went wrong...</span>
        )}
      </div>
    </>
  );
};
export default Login;
