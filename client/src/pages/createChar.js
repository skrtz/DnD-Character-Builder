import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import CharForm from "../components/CharForm";
import diceComponent from "../components/diceComponent";

const CreateChar = () => {
  return (
    <>
      <CharForm />
      <diceComponent />
    </>
  );
};

export default CreateChar;
