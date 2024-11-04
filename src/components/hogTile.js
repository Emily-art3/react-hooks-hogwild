import React, {useState} from "react";

function hogTile({ hog, hideHog }) {
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
            {/* hide button to remove the hog from view */}
            <button onClick={(e) => {
              e.stopPropagation(); //prevents the parent click event from firing
              hideHog(hog.name);
            }}>
                hide
                </button>
        </div>
    );
}
export default hogTile;