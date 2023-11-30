import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './RegisterPage.module.css';
import book2 from 'images/icons8-add-a-new-contact-on-modern-cell-phone-96.png';
import { registerThunk } from 'redux/auth/auth.reducer';

const Register = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    // console.log('name: ', name);
    // console.log('email: ', email);
    // console.log('password: ', password);
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };
  return (
    <>
      {' '}
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go Home
      </NavLink>
      <div className={css.register}>
        <form className={css.form} onSubmit={onSubmit}>
          <label>
            <p className={css.inputName}>Name</p>
            <input
              type="text"
              name="userName"
              className={css.formInput}
              placeholder="Name"
              required
            ></input>
          </label>
          <label>
            <p className={css.inputName}>Email</p>
            <input
              type="email"
              name="userEmail"
              placeholder="Email"
              className={css.formInput}
              required
            ></input>
          </label>
          <label>
            <p className={css.inputName}>Password</p>
            <input
              type="password"
              name="userPassword"
              className={css.formInput}
              placeholder="Password"
              required
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
      </div>
    </>
  );
};
export default Register;
