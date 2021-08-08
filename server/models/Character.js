const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const characterSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
  background: {
    type: String,
    required: true,
  },
  
  // characterId: {
  //   type: ,
  //   required: true,
  // },
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

const Character = model('Character', characterSchema);


module.exports = Character


