import { useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";
import "../app.css";

export const Characters = () => {
  const { getCharacters, personajes } = useCharacter();

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <ul>
      {personajes.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p> {item.status}</p>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
};
