const { Schema, model } = require("mongoose");

const userSchema = require("./User");
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const characterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },

  level: {
    type: String,
  },

  hitPoints: {
    type: String,
  },

  weapons: {
    type: String,
  },

  alignment: {
    type: String,
  },

  background: {
    type: String,
    required: true,
  },

  strength: {
    type: String,
  },
  dexterity: {
    type: String,
  },
  constitution: {
    type: String,
  },
  intelligence: {
    type: String,
  },
  wisdom: {
    type: String,
  },

  charisma: {
    type: String,
  },

  items: {
    type: String,
  },

  image: {
    type: String,
  },
  link: {
    type: String,
  },
  race: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
