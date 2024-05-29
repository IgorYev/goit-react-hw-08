import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function NotFoundPage() {
  return (
    <div>
      <PageTitle>Opps! Page not found! Sorry!</PageTitle>
      <p>
        Please, visit
        <Link to="/">home page</Link>
      </p>
    </div>
  );
}
