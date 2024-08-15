import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, getNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(getNameFilter);

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchFieldId}>
        Find contacts by name or phone number
      </label>
      <input
        className={css.searchBoxInput}
        id={searchFieldId}
        type="text"
        value={filter}
        onChange={(event) => dispatch(setStatusFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
