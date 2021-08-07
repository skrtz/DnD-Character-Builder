const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");

const { signToken } = require("../utils/auth");

const Character = characterSchema

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        // .populate('character')

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

<<<<<<< HEAD
=======

>>>>>>> 5bb95383a474dc93b7bf876bf3e761fa813feb5f
    // character: async (parent, args, context) => {
    //   if (context.character) {
    //     const characterData = await Characters.findOne({
    //       characterId: context.character.characterId,
    //     });

    //     return characterData
    //   }
    //   throw console.error('No character by this name');
    // },

  //   userCharacters: async (parent, args, context) => {
  //     if (context.user) {
  //       const userData = await User.findOne({ _id: context.user._id })
  //       const characterData = user.characterList
  //     }
  //     return characterData
  //   }
<<<<<<< HEAD
=======

>>>>>>> 5bb95383a474dc93b7bf876bf3e761fa813feb5f
    
  // },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, username, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addCharacter: async (parent, { characterData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { characterList: characterData } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in");
    },

    deleteCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Characters.findOneAndDelete({
          _id: characterId,
          createdBy: context.user.username,

        });


        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { character: character._id } }
        );
      }
    },


    // updateCharacter: async (parent, { characterId }, context) => {
    //   if (context.user) {
    //     const character = Characters.findOneAndUpdate({
    //       _id: characterId,
    //       createdBy: context.user.username,
    //     });
    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { character: character._id } }
    //     );
    //   }
    // },


  },
}

module.exports = resolvers;
