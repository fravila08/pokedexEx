import { PokemonCard } from "../components/PokemonCard";
import { useContext } from "react";
import { myPokemon } from "../App";

export const PokemonTeamPage = () => {
  const { caughtPokemon } = useContext(myPokemon);

  return (
    <div>
      <h2>MY POKEMON TEAM</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {caughtPokemon.length > 0 ? (
          caughtPokemon.map((pokemon, idx) => (
            <PokemonCard
              key={idx}
              type={pokemon.type}
              pokemonImg={pokemon.pokemonImg}
              name={pokemon.name}
              moveOne={pokemon.moveOne}
              moveTwo={pokemon.moveTwo}
              moveThree={pokemon.moveThree}
              moveFour={pokemon.moveFour}
            />
          ))
        ) : (
          <h3>YOU DON'T HAVE ANY POKEMON</h3>
        )}
      </div>
    </div>
  );
};
