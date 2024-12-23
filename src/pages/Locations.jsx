import { useState, useEffect } from "react";

import "./Locations.css";

function Locations() {
  console.log("Function Locations");
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => setLocations(data.results))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  console.log("Function filteredLocations");
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locations">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="locations-grid">
        {filteredLocations.map((location) => (
          <div key={location.id} className="location-card">
            <h3>{location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>Residents: {location.residents.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
