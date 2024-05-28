import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <PageTitle>Opps! Page not found! Sorry!</PageTitle>
      <p className={css.message}>
        Please, visit
        <Link className={css.link} to="/">
          home page
        </Link>
      </p>
      <TransferWithinAStationIcon className={css.icon} sx={{ fontSize: 60 }} />
    </div>
  );
}