import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return (
    <div>
      <h2 className={css.title}>{children}</h2>
    </div>
  );
}
