import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = ({ caughtPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h1>POKEDEX</h1>
      <Link to="/">Home</Link>
      <Link to="/team/">My Team #{caughtPokemon.length}</Link>
      <Form
        className="d-flex"
        onSubmit={(e) => [
          e.preventDefault(),
          navigate(`/pokemon/${pokemonName}/`),
          setPokemonName(""),
        ]}
      >
        <Form.Control
          className="me-2"
          placeholder="search"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
