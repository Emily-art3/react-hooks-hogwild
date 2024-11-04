import React, { useState } from "react"; // Make sure useState is imported
import hogsData from "../porkers_data"; // Go up one level to import hog data
import HogTile from "./HogTile"; // Path to HogTile component
import NewHogForm from "./NewHogForm"; // Path to NewHogForm component
import FilterSortControls from "./FilterSortControls"; // Corrected path for FilterSortControls
import Nav from "./Nav"; // Correct path to Nav component

function App() {
  const [hogs, setHogs] = useState(hogsData); // Sets up state for all hogs
  const [filterGreased, setFilterGreased] = useState(false); // Toggle greased filter
  const [sortType, setSortType] = useState("name"); // Sorts by name or weight
  const [hiddenHogs, setHiddenHogs] = useState([]); // Tracks hidden hogs

  // Function to add a hog's name to hiddenHogs array
  const hideHog = (name) => {
    setHiddenHogs([...hiddenHogs, name]);
  };

  // Function to add a new hog to the array
  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  // Filters and sorts the list of hogs, excluding hidden hogs
  const displayHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => !filterGreased || hog.greased)
    .sort((a, b) => {
      if (sortType === "name") return a.name.localeCompare(b.name);
      if (sortType === "weight") return a.weight - b.weight;
      return 0;
    });

  // Renders the App component
  return (
    <div>
      <Nav />
      <FilterSortControls
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortType={sortType}
        setSortType={setSortType}
      />
      <NewHogForm addHog={addHog} />
      <div className="ui grid container">
        {displayHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
        ))}
      </div>
    </div>
  );
}

export default App;
