import css from "./Modal.module.css";

export default function Modal({ call, onClose, onClick }) {
  if (!call) {
    return null;
  }

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Delete this contact ?</h1>
        <button className={css.button} onClick={onClick}>
          Yes
        </button>
        <button className={css.button} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}
