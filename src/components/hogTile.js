import React, {useState} from "react";
function hogTile({ hog }) {
    const [showDetails, setShowDetails] = useState(false);
    //Toggles details display
    const handleClick = () => setShowDetails(!showDetails);

    return(
        <div className="App" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img src={hog.name} alt={hog.name} />
            {showDetails && (
                <div>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Highest Medal: {hog["highest medal achieved"]}</p>
                    </div>
            )}
        </div>
    );
}
export default hogTile;