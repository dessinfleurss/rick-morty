import { useEffect, useState } from "react";
import "../app.css";
export function Characters() {
  const [personajes, setpersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setpersonajes(data.results));
  }, []);

  return;
  <ul>
    {personajes.map((item, index) => (
      <li key={index}>
        <h3>{item.name}</h3>
        <p> {item.status}</p>
        <img src={item.image} />
      </li>
    ))}
  </ul>;
}
