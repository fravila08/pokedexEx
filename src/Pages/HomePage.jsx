import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

export const getPokemon = async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`);
  return response.data.results;
};

export const HomePage = () => {
  const pokemon = useLoaderData();

  return (
    <ol>
      <h2>Home</h2>
      {pokemon.map((poke, idx) => (
        <li key={idx}>
          <Link to={`/pokemon/${poke.name}/`}>{poke.name}</Link>
        </li>
      ))}
    </ol>
  );
};
