import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts.reducer';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore.filter);
  const dispatch = useDispatch();
  const mpDelete = 'https://audio.code.org/goal2.mp3';

  const removeContact = contactId => {
    dispatch(deleteContacts(contactId));
    new Audio(mpDelete).play();
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(normalizedFilter)
    );
  };

  const visContacts = visibleContacts();
  const sorted = [...visContacts].sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactList}>
        {sorted.map(({ name, number, id }) => (
          <ContactElement
            key={id}
            name={name}
            number={number}
            id={id}
            onRemoveContact={removeContact}
          />
        ))}
      </ul>
    </div>
  );
};
