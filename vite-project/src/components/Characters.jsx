import { useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";
import "../app.css";

export const Characters = () => {
  const { getCharacters, personajes } = useCharacter();

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <div id="titulo">
        <h1>La API de Rick y Morty</h1>
      </div>
      <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/661.jpeg" />
        <h1>
          <a class="link" href="https://rickandmortyapi.com/api/character/661">
            La novia de Morty
          </a>
        </h1>
        <h2>
          <li>
            <span>Vivo - Humano </span>
          </li>
        </h2>

        <h2>
          <a href="https://rickandmortyapi.com/api/location/103">
            Universo fusionado
          </a>
        </h2>

        <h2>
          <a href="https://rickandmortyapi.com/api/episode/39">
            El episodio de la tina del ácido
          </a>
        </h2>
      </div>

      <ul>
        {personajes.map((item, index) => (
          <li key={index} id="rick">
            <h3>{item.name}</h3>
            <p>
              {" "}
              {item.status}
              {item.species}
              <h2>Última ubicación conocida:</h2>
              <h2>Visto por primera vez en:</h2>
            </p>
            <img src={item.image} />
          </li>
        ))}
      </ul>
    </>
  );
};
