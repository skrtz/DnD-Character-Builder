// import React, { useState } from "react";
// import {
//   Card,
//   ListGroupItem,
//   ListGroup,
//   Col,
//   Row,
//   Form,
// } from "react-bootstrap";
// import { DiceRoll, exportFormats } from "rpg-dice-roller";



// const DiceComponent = () => {
  
  const [diceRoll, setDiceRoll] = useState({
    diceRoll:'',
  })
  

  const rollDice = async (event) => {
    // event.preventDefault();

    const roll = await new DiceRoll("4d6dl1");
    


    setDiceRoll(diceRoll, roll.output)
    console.log(roll.output)
    
  };

 
  return (
    <div>
      <p>You rolled {diceRoll}  </p>
      <button onClick={rollDice}>
        Roll Dice!
      </button>
    </div>
  );
}

export default DiceComponent
