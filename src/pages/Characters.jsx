import { useState, useEffect } from "react";

import "./Characters.css";

function Characters() {
  console.log("Function Characters");
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  console.log("Function filteredCharacters");
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCharacter = filteredCharacters[currentIndex];

  const handleNext = () => {
    console.log("Function handleNext");
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredCharacters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    console.log("Function handlePrev invoked");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredCharacters.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="characters">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCharacters.length > 0 && currentCharacter && (
        <>
          <div className="carousel">
            <button onClick={handlePrev}>Previous</button>
            <div className="character-card">
              <img src={currentCharacter.image} alt={currentCharacter.name} />
              <h3>{currentCharacter.name}</h3>
            </div>
            <button onClick={handleNext}>Next</button>
          </div>

          <div className="character-info">
            <h2>{currentCharacter.name}</h2>
            <p>Status: {currentCharacter.status}</p>
            <p>Species: {currentCharacter.species}</p>
            <p>Location: {currentCharacter.location.name}</p>
            <p>Origin: {currentCharacter.origin.name}</p>
            <p>Gender: {currentCharacter.gender}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Characters;
