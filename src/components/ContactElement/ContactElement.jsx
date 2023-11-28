import css from './ContactElement.module.css';
import svgDelete from '../../images/icons8-delete-32.png';
import iconPhoto from '../../images/icons8-contact-78.png';

export const ContactElement = ({ id, name, number, onRemoveContact }) => {
  return (
    <li className={css.itemContact} key={id}>
      <div className={css.everyItem}>
        <img src={iconPhoto} alt="{iconPhoto}" width={20} height={30}></img>
        <p>{name}</p>
        <p>{number}</p>

        {
          <button
            className={css.buttonDelete}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(id)}
          >
            <img src={svgDelete} alt="{svgDelete}" width={30}></img>
          </button>
        }
      </div>
    </li>
  );
};
