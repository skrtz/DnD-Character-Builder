import { Form } from "react-bootstrap";



const createChar = () => {
    return (
        <Form>
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
                <Form.Label>Enter Class</Form.Label>
                <Form.Control type="password" placeholder="Enter Class" />
            </Form.Group>
            <button variant="primary" type="submit">
                Submit
            </button>
        </Form>
    );
};

export default createChar;