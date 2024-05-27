import css from "./Loader.module.css";
import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.container}>
      <Hearts
        height="70"
        width="70"
        color="yellow"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}