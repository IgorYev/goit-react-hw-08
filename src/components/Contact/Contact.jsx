import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactContainer}>
        <span>
          <p className={css.contactInformation}>{name}</p>
        </span>
        <span>
          <p className={css.contactInformation}>{number}</p>
        </span>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
}
