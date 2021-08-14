import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_CHAR } from '../utils/mutations';


const CharForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        race: '',
        class: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        background: '',
        alignment: '',
        weapons: ''
    });

    const [addChar] = useMutation(ADD_CHAR);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_CHAR` mutation
        try {
            const { data } = addChar({
                variables: { characterInput: formState },
            });
            // don't do this...
            // window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <Form onSubmit={handleFormSubmit} id="charForm">
            <Form.Group className="mb-3" controlId="charName">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charRace">
                <Form.Label>Enter Race</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Race"
                    name="race"
                    value={formState.race}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charClass">
                <Form.Label>Enter Class</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Class"
                    name="class"
                    value={formState.class}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charAbilities">
                <Form.Label>Enter Ability Scores</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Strength Score"
                    name="strength"
                    value={formState.strength}
                    onChange={handleChange}
                />
                <Form.Control
                    type="number"
                    placeholder="Dexterity Score"
                    name="dexterity"
                    value={formState.dexterity}
                    onChange={handleChange}
                />
                <Form.Control
                    type="number"
                    placeholder="Constitution Score"
                    name="constitution"
                    value={formState.constitution}
                    onChange={handleChange}
                />
                <Form.Control
                    type="number"
                    placeholder="Intelligence Score"
                    name="intelligence"
                    value={formState.intelligence}
                    onChange={handleChange}
                />
                <Form.Control
                    type="number"
                    placeholder="Wisdom Score"
                    name="wisdom"
                    value={formState.wisdom}
                    onChange={handleChange}
                />
                <Form.Control
                    type="number"
                    placeholder="Charisma Score"
                    name="charisma"
                    value={formState.charisma}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charBackground">
                <Form.Label>Enter Character Background</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Background"
                    value={formState.background}
                    name="background"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charAlignment">
                <Form.Label>Enter Alignment</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Alignment"
                    name="alignment"
                    value={formState.alignment}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charItems">
                <Form.Label>Enter Items</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Items"
                    name="items"
                    value={formState.items}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charWeapons">
                <Form.Label>Enter Weapons</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Weapons"
                    name="weapons"
                    value={formState.weapons}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charHP">
                <Form.Label>Enter HitPoints</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter HP"
                    name="hitPoints"
                    value={formState.hitPoints}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="charLevel">
                <Form.Label>Enter Level</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Level"
                    name="level"
                    value={formState.level}
                    onChange={handleChange}
                />
            </Form.Group>

            <button variant="primary" type="submit">
                Submit
            </button>

        </Form>
    )
}

export default CharForm;