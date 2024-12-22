import { useState } from "react";

import Characters from "./Characters";

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
      </div>

      {selectedSection && (
        <div className="selected-content">
          {selectedSection === "characters" && <Characters />}
        </div>
      )}
    </div>
  );
}

export default Home;
