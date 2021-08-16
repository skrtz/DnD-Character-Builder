import React from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CHAR } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";

const Character = ({ characters }) => {
  const [removeChar] = useMutation(DELETE_CHAR);
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data
  console.log(userData)

  const handleRemoveChar = async (characterId) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await removeChar({
        variables: { characterId },
      });
    } catch (err) {
      console.error(err);
    }
  };

    if (!characters.length) {
      return <h3>No characters yet</h3>;
    }
    console.log();
    
    return (
      <div id="characterCards">
        <Row>
          {characters &&
            characters.map((character) => (
              <Col style={{ marginBottom: "20px" }}>
                <Card style={{ width: '200px' }} >
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>Level: {character.level} {character.name}</Card.Title>
                    <Card.Text>
                      {character.background}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Race: {character.race}</ListGroupItem>
                    <ListGroupItem>Class: {character.class} </ListGroupItem>
                    <ListGroupItem>Weapon: {character.weapons} </ListGroupItem>
                    <ListGroupItem>
                      <ul style={{ padding: "0px", marginBottom: "1px" }}>
                        Strength: {character.strength}
                      </ul>
                      <ul style={{ padding: "0px", marginBottom: "1px" }}>
                        Dexterity: {character.dexterity}
                      </ul>
                      <ul style={{ padding: "0px", marginBottom: "1px" }}>
                        Constitution: {character.constitution}
                      </ul>
                      <ul style={{ padding: "0px", marginBottom: "1px" }}>
                        Intelligence: {character.intelligence}
                      </ul>
                      <ul style={{ padding: "0px", marginBottom: "1px" }}>
                        Wisdom: {character.wisdom}
                      </ul>
                      <ul style={{ padding: "0px", marginBottom: "1px" }}>
                        Charisma: {character.charisma}
                      </ul>
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button href="#">Edit</Button>
                    <Button
                      href="#"
                      onClick={() => handleRemoveChar(character._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  };


  export default Character;
