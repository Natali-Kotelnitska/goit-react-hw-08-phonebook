import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/contactsApi';
import style from './ContactList.module.css';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      <li className={style.ContactList__item} key={id}>
        <span className={style.ContactList__text}>
          {name}: {number}
        </span>
        <button
          className={style.ContactList__button}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;

// import { useDeleteContactMutation } from 'services/contactsApi';
// import PropTypes from 'prop-types';

// import s from './ContactList.module.css';

// export default function ContactListItem({ id, name, number }) {
//   // const dispatch = useDispatch();
//   const [deleteContact, { isLoading }] = useDeleteContactMutation();

//   return (
//     <li className={s.contactsItem}>
//       <p className={s.contactsText}>
//         <span className={s.contactName}>{name}:</span>
//         <span>
//           <a href={`tel:${number}`} className={s.contactTel}>
//             {number}
//           </a>
//         </span>
//       </p>
//       <button
//         type="button"
//         className={s.contactsBtn}
//         // onClick={() => dispatch(deleteContact(id))}
//         onClick={() => deleteContact(id)}
//         disabled={isLoading}
//       >
//         Delete
//       </button>
//     </li>
//   );
// }

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
