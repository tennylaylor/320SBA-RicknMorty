import { useState } from "react";

import Characters from "./Characters";

import Locations from "./Locations";

import Episodes from "./Episodes";

import "./Home.css";

function Home() {
  console.log("Function Home");
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="home">
      <h1>Welcome to Rick and Morty Universe</h1>
      <div className="home-content">
        <div
          className="section"
          onClick={() => setSelectedSection("characters")}
        >
          <h2>Characters</h2>
          <p>Explore all your favorite characters from the show!</p>
        </div>
        <div
          className="section"
          onClick={() => setSelectedSection("locations")}
        >
          <h2>Locations</h2>
          <p>Visit the various locations across dimensions!</p>
        </div>
        <div className="section" onClick={() => setSelectedSection("episodes")}>
          <h2>Episodes</h2>
          <p>Browse through all episodes of Rick and Morty!</p>
        </div>
      </div>

      {selectedSection && (
        <div className="selected-content">
          {selectedSection === "characters" && <Characters />}
          {selectedSection === "locations" && <Locations />}
          {selectedSection === "episodes" && <Episodes />}
        </div>
      )}
    </div>
  );
}

export default Home;
