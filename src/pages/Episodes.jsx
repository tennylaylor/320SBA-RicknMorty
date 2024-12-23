import { useState, useEffect } from "react";

import "./Episodes.css";

function Episodes() {
  console.log("Function Episodes");
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.error("Error fetching episodes:", error));
  }, []);

  console.log("Function filteredEpisodes");
  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="episodes">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search episodes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="episodes-list">
        {filteredEpisodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <h3>{episode.name}</h3>
            <p>Episode: {episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
