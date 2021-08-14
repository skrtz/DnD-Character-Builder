const { Schema, model } = require("mongoose");

const userSchema = require("./User");
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const characterSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true,
  },

  level: {
    type: Number,
  },

  hitPoints: {
    type: Number
  },

  weapons: {
    type: String
  },
  
  alignment: {
    type: String
  },

  background: {
    type: String,
  },

  stats: {
    strength: { type: Number },
    dexterity: { type: Number },
    constitution: { type: Number },
    intelligence: { type: Number },
    wisdom: { type: Number },
    charisma: { type: Number },
  },

  items: {
    type: String
  },

  image: {
    type: String,
  },
  link: {
    type: String,
  },
  race: {
    type: String,
    // required: true,
  },
  class: {
    type: String,
    // required: true,
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
