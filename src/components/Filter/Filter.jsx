import React from 'react';
import { filterTerm } from 'redux/filter/filter.reducer';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export default function Filter({ value }) {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterTerm(event.target.value));
  };

  return (
    <form className={css.formlFind}>
      <label className={css.labelFind}>
        Find contacts by name
        <input
          className={css.inputFind}
          type="text"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </form>
  );
}
