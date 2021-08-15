import React, {useState} from 'react';
import { Card, ListGroupItem, ListGroup, Col, Row, Button } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { DELETE_CHAR } from '../../utils/mutations';

const Character = ({ characters, handleDelete }) => {
  
  if (!characters.length) {
    return <h3>No characters yet</h3>;
  }
  
  // const [deleteChar] = useMutation(DELETE_CHAR);

  // const [deleteMe, setDeleteMe] = useState({
  //   characterId: '_Id'
  // });

  // const handleDelete = (e) => {
  //   console.log('hello')
  // }

  return (
    <div id="characterCards">
      <Row>
        {characters &&
          characters.map((character) => (
            <Col style={{marginBottom: "20px"}}>
              <Card style={{ width: '200px' }} >
                <Card.Img variant="top" src={character.image} key={character._Id}/>
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    {character.background}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Race: {character.race}</ListGroupItem>
                  <ListGroupItem>Class: {character.class} </ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button href="#">Edit</Button>
                  <Button href="#" onClick={handleDelete}>Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Character;