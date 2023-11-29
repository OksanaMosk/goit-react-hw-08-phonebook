import css from './RegisterPage.module.css';
import book2 from 'images/icons8-add-a-new-contact-on-modern-cell-phone-96.png';

const Register = () => {
  return (
    <div className={css.register}>
      <div className={css.contactForm}>
        <form className={css.form}>
          <label>
            <p className={css.inputName}>Name</p>
            <input
              type="text"
              name="name"
              id
              value
              onChange
              className={css.formInput}
              placeholder="Name"
              autoComplete="on"
              autoFocus
              required
            ></input>
          </label>
          <label>
            <p className={css.inputName}>Email</p>
            <input
              type="email"
              name="email"
              id
              value
              onChange
              className={css.formInput}
              autoComplete="on"
              autoFocus
              required
            ></input>
          </label>
          <label>
            <p className={css.inputName}>Password</p>
            <input
              type="text"
              name="name"
              id
              value
              onChange
              className={css.formInput}
              placeholder="Name"
              autoComplete="on"
              autoFocus
              required
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
      );
    </div>
  );
};
export default Register;
