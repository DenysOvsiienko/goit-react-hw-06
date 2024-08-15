import { deleteContact } from "../../redux/contactsSlice";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>
          <FaUser />
          {name}
        </p>
        <p className={css.contactText}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        className={css.contactDeleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
