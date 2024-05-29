import { useDispatch, useSelector } from "react-redux";
import { selectFiltersName } from "../../redux/filters/slice";
import { setFilters } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFiltersName);
  const handleFiltersName = (event) => dispatch(setFilters(event.target.value));

  return (
    <div>
      <label htmlFor="searchText">Find contacts by name:</label>
      <input type="text" value={filterValue} onChange={handleFiltersName} />
    </div>
  );
}
