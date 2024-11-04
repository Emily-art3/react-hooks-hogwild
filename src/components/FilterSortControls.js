import React from "react";

function FilterSortControls({ filterGreased, setFilterGreased, sortType, setSortType }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
        Show Greased Only
      </label>

      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default FilterSortControls;
