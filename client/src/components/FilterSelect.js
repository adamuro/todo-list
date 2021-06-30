import React from 'react';
import '../styles/FilterSelect.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../actions';

const FilterSelect = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const FILTERS = ['ALL', 'COMPLETED', 'UNCOMPLETED'];

  //Change filter in global state
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  }

  return (
    <div className="filter-bar">
      <select value={filter} onChange={handleChange}>
        {FILTERS.map(filter =>
          <option value={filter} key={filter}>
            {filter}
          </option>
        )}
      </select>
    </div>
  );
}

export default FilterSelect;