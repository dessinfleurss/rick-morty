import { useState } from "react";

export function useCharacter() {
  const [personajes, setpersonajes] = useState([]);

  const getCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setpersonajes(data.results));
  };
  return {
    personajes,
    getCharacters,
  };
}
