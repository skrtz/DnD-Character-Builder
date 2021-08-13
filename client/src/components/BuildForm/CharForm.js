import React, { useState } from 'react';
import { Card, ListGroupItem, ListGroup, Col, Row, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_CHAR } from '../../utils/mutations';


const CharForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        race: '',
        class: '',
        background: '',
        stats: {
            strength: '',
            dexterity: '',
            constitution: '',
            intelligence: '',
            wisdom: '',
            charisma: '',
        },
        alignment: '',
        weapons: ''
    });

    const [addChar, { error }] = useMutation(ADD_CHAR);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_CHAR` mutation
        try {
            const { data } = addChar({
                variables: { ...formState },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="charName">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                    type="input"
                    placeholder="Enter Name"
                    value="name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charRace">
                <Form.Label>Enter Race</Form.Label>
                <Form.Control
                    type="input"
                    placeholder="Enter Race"
                    value="race"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charClass">
                <Form.Label>Enter Class</Form.Label>
                <Form.Control
                    type="input"
                    placeholder="Enter Class"
                    value="class"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charAbilities" value="stats">
                <Form.Label>Ability Scores</Form.Label>
                <Form.Control
                    type="input"
                    placeholder="Strength"
                    value="strength"
                />
                <Form.Control
                    type="input"
                    placeholder="Dexterity"
                    value= "dexterity"
                />
                <Form.Control 
                    type="input" 
                    placeholder="Constitution" 
                    value="constitution"
                />
                <Form.Control 
                    type="input" 
                    placeholder="Intelligence" 
                    value="intelligence"
                />
                <Form.Control 
                    type="input" 
                    placeholder="Wisdom" 
                    value="wisdom"
                />
                <Form.Control 
                    type="input" 
                    placeholder="Charisma" 
                    value="charisma"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charBackground">
                <Form.Label>Enter Character Background</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="Enter Background" 
                    value="background"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charAlignment">
                <Form.Label>Enter Alignment</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="Enter Alignment" 
                    value="alignment"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charItems">
                <Form.Label>Enter Items</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="Enter Items" 
                    value="items"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charWeapons">
                <Form.Label>Enter Weapons</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="Enter Weapons" 
                    value="weapons"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charHP">
                <Form.Label>Enter HitPoints</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="Enter HP" 
                    value="hitPoints"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charLevel">
                <Form.Label>Enter Level</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="Enter Level" 
                    value="level"
                />
            </Form.Group>

            <button variant="primary" type="submit">
                Submit
            </button>

        </Form>
    )
}

export default CharForm;