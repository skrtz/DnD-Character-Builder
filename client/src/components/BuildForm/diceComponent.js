import React, { useState } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import { DiceRoller, exportFormats } from "rpg-dice-roller";

const roller = new DiceRoller();

const diceComponent = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const rolls = roller.roll(
      "4d6dl1",
      "4d6dl1",
      "4d6dl1",
      "4d6dl1",
      "4d6dl1",
      "4d6dl1"
    );

    return (
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="diceRoll">
          <Form.Label>Roll Dice!</Form.Label>
          <p>{roller.output}</p>
        </Form.Group>
        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
    );
  };
};

export default diceComponent
