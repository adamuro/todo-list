import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = props => {
  const filters = ['All', 'Completed', 'Uncompleted'];
  const filterOptions = filters.map(filter =>
    <option value={filter} key={filter}> {filter} </option>
  );

  return (
    <div className="filter-bar">
      <select value={props.filter} onChange={props.onChange}>
        {filterOptions}
      </select>
    </div>
  );
}

export default FilterBar;