import { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { PokemonCardContent } from "./PokemonCardContent";
import Button from "react-bootstrap/Button";
import {  useNavigate } from "react-router-dom";
import { myPokemon } from "../App";

export const pickBackGroundColor = (type) => {
  const pokemon_types_to_color = {
    grass: "green",
    fire: "red",
    electric: "yellow",
    ground: "brown",
    rock: "brown",
    water: "blue",
    psychic: "purple",
    poison: "purple",
    dragon: "silver",
    steel: "silver",
    flying: "cyan",
    ice: "cyan",
    normal: "gray",
  };
  return pokemon_types_to_color[type];
};

export const addOrDropPokemonToMyTeam = (
  pokeInfo,
  caughtPokemon,
  setCaughtPokemon
) => {
  if (caughtPokemon.some((poke) => poke.name === pokeInfo.name)) {
    setCaughtPokemon(
      caughtPokemon.filter((pokemon) => pokemon.name !== pokeInfo.name)
    );
  } else {
    if (caughtPokemon.length < 6) {
      setCaughtPokemon([...caughtPokemon, pokeInfo]);
    }
  }
};

export const PokemonCard = ({
  type,
  name,
  moveOne,
  moveTwo,
  moveThree,
  moveFour,
  pokemonImg,
}) => {
  const { caughtPokemon } = useContext(myPokemon);
  const { setCaughtPokemon } = useContext(myPokemon);
  const [backgroundColor, setBackGroundColor] = useState("white");
  const navigate = useNavigate();
  const pokemonInformation = {
    name: name,
    type: type,
    moveOne: moveOne,
    moveTwo: moveTwo,
    moveThree: moveThree,
    moveFour: moveFour,
    pokemonImg: pokemonImg,
  };

  useEffect(() => {
    setBackGroundColor(pickBackGroundColor(type));
  }, [type]);

  return (
    <Card style={{ width: "30vw", backgroundColor }}>
      <Card.Img variant="top" src={pokemonImg} />
      <PokemonCardContent
        name={name}
        moveOne={moveOne}
        moveTwo={moveTwo}
        moveThree={moveThree}
        moveFour={moveFour}
      />
      <Button
        variant="outline-primary"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <Button
        variant="outline-dark"
        onClick={() =>
          addOrDropPokemonToMyTeam(
            pokemonInformation,
            caughtPokemon,
            setCaughtPokemon
          )
        }
      >
        Catch / Release
      </Button>
    </Card>
  );
};
