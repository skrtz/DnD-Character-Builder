import React, { useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";



const DiceComponent = () => {
  
  const [diceRoll, setDiceRoll] = useState({
  diceRoll:'',
})
  
  
  
  const rollDice = async (event) => {
    // event.preventDefault();

    const roll = new DiceRoll("4d6dl1");
    

    console.log(roll.output);
    return roll.output
    
  };

  const handleChange = (event) => {
    const { diceRoll, userRoll } = event.target;
        setDiceRoll({ ...diceRoll, diceRoll: userRoll });
  }

  return (
    <div>
      <p>You rolled  </p>
      <button onClick={rollDice}>
        Roll Dice!
      </button>
    </div>
  );
}

export default DiceComponent
