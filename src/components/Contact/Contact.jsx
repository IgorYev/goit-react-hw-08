import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() =>
        toast.success("Your contact has been deleted !!!", {
          style: {
            border: "10px solid yellow",
            padding: "16px",
            color: "green",
            background: "white",
          },
        })
      )
      .catch(() => {
        toast.error("Oops, something went wrong!!! Try again", {
          style: {
            border: "10px solid yellow",
            padding: "20px",
            color: "red",
            fontSize: "16px",
            background: "white",
          },
        });
      });

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.telNumber}>
          <BsTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.button} onClick={() => setModal(true)}>
        Delete
      </button>
      <Modal
        call={modal}
        onClose={() => setModal(false)}
        onClick={handleDeleteContact}
      />
    </div>
  );
}
