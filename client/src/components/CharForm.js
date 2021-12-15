import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_CHAR } from "../utils/mutations";
// import DiceComponent from "./diceComponent";

const CharForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    image: "",
    race: "",
    class: "",
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    background: "",
    alignment: "",
    weapons: "",
  });
  

  const [addChar] = useMutation(ADD_CHAR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_CHAR` mutation
    try {
      const { data } = addChar({
        variables: { characterInput: formState },
      });
      // don't do this...
      window.location.href="/profile";
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
      <Form.Group className="mb-4" controlId="charName">
        <Form.Label id="formTitle">Enter Name</Form.Label>
        <p id="text">
          Before choosing a name for your character take a second to think about
          the kind of adventurer you want to play. You might be a courageous
          fighter, a skulking rogue, a fervent cleric, or a flamboyant wizard.
          Pick a name that will exemplify and amplify theindividual feature of
          you fantastic persona.
        </p>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="charName">
        <Form.Label id="formTitle">Enter Character Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Must end with .jpg or .png"
          name="image"
          value={formState.image}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charRace">
        <Form.Label id="formTitle">Enter Race</Form.Label>
        <p id="text">
          Every character belongs to a race, one of the many intelligent
          humanoid species in the D&D world. The most common player character
          races are dwarves, elves, halflings, and humans. The race you choose
          contribute in an important way, by establishing a general appearance
          and the natural talents gained from culture and ancestry.
        </p>
        <Form.Control
          type="text"
          placeholder="Enter Race"
          name="race"
          value={formState.race}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charClass">
        <Form.Label id="formTitle">Enter Class</Form.Label>
        <p id="text">
          Every adventurer is a member of a class. Class broadly describes the
          character's vocation, what special talents they possess, and the
          tactics they are most likely to employ when exploring a dungeon,
          fighting monsters, or engaging in tense negotiation.
        </p>
        <Form.Control
          type="text"
          placeholder="Enter Class"
          name="class"
          value={formState.class}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charAbilities">
        <Form.Label id="formTitle">Enter Ability Scores</Form.Label>
        <p id="text">
          Much of what your character does in the game depends on their six
          abilities. Each ability has a score, which is the number you will
          record on your character form. You may switch around the numbers after filling it
          out a first time. If you are uncomfortable with randomly generating
          these scores you can use the following scores instead:
          15,14,13,12,10,8
        </p>
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
        <Form.Label id="formTitle">Enter Character Background</Form.Label>
        <p id="text">
          Your character's background describes where they come from, their
          original occupation, and your character's place in the D&D world. Talk
          with your Dungeon Master while building your background and they will
          be able to offer guidance. A background that fits within the campaign
          is always a more enjoyable expirience for whole party.
        </p>
        <Form.Control
          type="text"
          placeholder="Enter Background"
          value={formState.background}
          name="background"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charAlignment">
        <Form.Label id="formTitle">Enter Alignment</Form.Label>
        <p id="text">
          A character's alignment is the moral compass that guides their
          decisions throughout the game. Some examples of this are: Neutral
          Good, Chaotic Evil, True Neutral.
        </p>
        <Form.Control
          type="text"
          placeholder="Enter Alignment"
          name="alignment"
          value={formState.alignment}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charItems">
        <Form.Label id="formTitle">Enter Items</Form.Label>
        <p id="text">
          Your class and background will generally determine your equipment. The
          Dungeon Master may also have some campaign specific items that you
          will pick up at the beginning of the game. Fill this section in with
          those items.
        </p>
        <Form.Control
          type="text"
          placeholder="Enter Items"
          name="items"
          value={formState.items}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charWeapons">
        <Form.Label id="formTitle">Enter Weapons</Form.Label>
        <p id="text">List the weapons that your character carries on them here.</p>
        <Form.Control
          type="text"
          placeholder="Enter Weapons"
          name="weapons"
          value={formState.weapons}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charHP">
        <Form.Label id="formTitle">Enter HitPoints</Form.Label>
        <p id="text">
          The hit points you have at the beginning of the game are dependant on
          your class. Enter those hit points here. Don't worry about it being a
          low number, you will gain hit points as you level up and become a
          stronger player.
        </p>
        <Form.Control
          type="number"
          placeholder="Enter HP"
          name="hitPoints"
          value={formState.hitPoints}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="charLevel">
        <Form.Label id="formTitle">Enter Level</Form.Label>
        <p id="text">
            Unless stated otherwise by your Dungeon Master every new character starts at a level 1. Input that number here.
        </p>
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
  );
};

export default CharForm;
