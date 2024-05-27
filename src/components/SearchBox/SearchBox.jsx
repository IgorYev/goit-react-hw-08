import { useDispatch, useSelector } from "react-redux";
import { selectFiltersName } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFiltersName);
  const handleFiltersName = (event) => dispatch(setFilters(event.target.value));

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor="searchText">
        Find contacts by name:
      </label>
      <input
        className={css.field}
        type="text"
        value={filterValue}
        onChange={handleFiltersName}
      />
    </div>
  );
}
