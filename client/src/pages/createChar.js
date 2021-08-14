import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import CharForm from "../components/BuildForm/CharForm";
import diceComponent from "../components/BuildForm/diceComponent"


const CreateChar = () => {
    return (
        <>
        <CharForm />
        <diceComponent/>
        </>
    )
};

export default CreateChar;