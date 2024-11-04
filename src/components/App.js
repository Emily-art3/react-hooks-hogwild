import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import React, { useState } from "react";
import hogsData from "./porkers_data"; // Import the hog data

function App() {
	const [hogs, setHogs] = useState(hogsData); 	//Sets up state for allhogs
	const [filterGreased, setFilterGreased] = useState(false); //Toggle greased filter
	const [sortType, setSortType] = useState("name"); // sorts by name or weight
	const [hiddenHogs, setHiddenHogs] = useState([]); // Tracks hidden hogs
	
	//renders the APP for the component
	return (
		<div className="App">
			<Nav />
		</div>
	);
}

export default App;
