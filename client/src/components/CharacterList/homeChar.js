import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const homeChar = ({ characters }) => {
  if (!characters.length) {
    return <h3>No characters yet</h3>;

  }

  return (
    <div id="characterCards">
      <Row>
        {characters &&
          characters.map((character) => (
            <Col style={{ marginBottom: "20px" }}>
              <Card style={{ width: "200px" }} id="cardBody">
                <Card.Img variant="top" src={character.image} key={character.id} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};


export default homeChar;