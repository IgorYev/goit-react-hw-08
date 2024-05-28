import PageTitle from "../../components/PageTitle/PageTitle";
// import RecentActorsIcon from "@mui/icons-material/RecentActors";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>Welcome</PageTitle>
      {/* <RecentActorsIcon className={css.icon} sx={{ fontSize: 60 }} /> */}
    </div>
  );
}
