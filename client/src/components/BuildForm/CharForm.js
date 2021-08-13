import React, { useState } from 'react';
import { Card, ListGroupItem, ListGroup, Col, Row, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_CHAR } from '../../utils/mutations';


const CharForm = () => {
    const [formState, setFormState] = useState({
        thoughtText: '',
        thoughtAuthor: '',
    });

    return (
        <Form>
            <Form.Group className="mb-3" controlId="charName">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="input" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charRace">
                <Form.Label>Enter Race</Form.Label>
                <Form.Control type="input" placeholder="Enter Race" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charClass">
                <Form.Label>Enter Class</Form.Label>
                <Form.Control type="password" placeholder="Enter Class" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charAbilities">
                <Form.Label>Ability Scores</Form.Label>
                <Form.Control type="input" placeholder="Strength" />
                <Form.Control type="input" placeholder="Dexterity" />
                <Form.Control type="input" placeholder="Constitution" />
                <Form.Control type="input" placeholder="Intelligence" />
                <Form.Control type="input" placeholder="Wisdom" />
                <Form.Control type="input" placeholder="Charisma" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charBackground">
                <Form.Label>Enter Character Background</Form.Label>
                <Form.Control type="password" placeholder="Enter " />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charAlignment">
                <Form.Label>Enter Alignment</Form.Label>
                <Form.Control type="input" placeholder="Enter Alignment" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charBackground">
                <Form.Label>Enter Background</Form.Label>
                <Form.Control type="input" placeholder="Enter Background" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charWeapons">
                <Form.Label>Enter Weapons</Form.Label>
                <Form.Control type="input" placeholder="Enter Weapons" />
            </Form.Group>

            <button variant="primary" type="submit">
                Submit
            </button>

        </Form>
    )
}

export default CharForm;