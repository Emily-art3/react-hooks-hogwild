import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import React, { useState } from "react";
import hogsData from "./porkers_data"; // Imports the hog data
import hogTile from "./hogTile"; //imports the hogTile component

function App() {
	const [hogs, setHogs] = useState(hogsData); 	//Sets up state for allhogs
	const [filterGreased, setFilterGreased] = useState(false); //Toggle greased filter
	const [sortType, setSortType] = useState("name"); // sorts by name or weight
	const [hiddenHogs, setHiddenHogs] = useState([]); // Tracks hidden hogs
	

	//filters and sorts hogs array
	const displayHogs = hogs
	.filter(hog => !hiddenHogs.includes(hog.name))
	.filter(hog => !filterGreased || hog.greased)
	.sort((a,b) => {
		if (sortType === "name") return a.name.localeCompare(b.name);
		if (sortType === "weight") return a.weight - b.weight;
	});

	//renders the APP for the component
	return (
		<div className="App">
			{displayHogs.map(hog => (
				<hogTile key={hog.name} hog={hog} />
			))}
			<Nav />
		</div>
	);
}

export default App;
