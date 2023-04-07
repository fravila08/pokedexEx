import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PokemonCardContent = ({
  pokemonName,
  moveOne,
  moveTwo,
  moveThree,
  moveFour,
}) => {
  return (
    <Card.Body>
      <Card.Title>{pokemonName}</Card.Title>
      <Container>
        <Row>
          <Col>{moveOne}</Col>
          <Col>{moveTwo}</Col>
        </Row>
        <Row>
          <Col>{moveThree}</Col>
          <Col>{moveFour}</Col>
        </Row>
      </Container>
    </Card.Body>
  );
};
