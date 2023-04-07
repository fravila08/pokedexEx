import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { PokemonCard } from "../components/PokemonCard";

export const getPokemonDetails = async ({ params }) => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    return response.data;
  } catch (err) {
    alert(err);
    return null;
  }
};

export const PokemonPage = () => {
  const pokemonDetails = useLoaderData();

  return (
    <div>
      <h2>Pokemon</h2>
      <PokemonCard
        type={pokemonDetails.types[0].type.name}
        pokemonImg={pokemonDetails.sprites.front_default}
        name={pokemonDetails.name}
        moveOne={pokemonDetails.moves[0].move.name}
        moveTwo={pokemonDetails.moves[1].move.name}
        moveThree={pokemonDetails.moves[2].move.name}
        moveFour={pokemonDetails.moves[3].move.name}
      />
    </div>
  );
};
