const { AuthenticationError } = require("apollo-server-express");
const { User, Characters } = require("../models");
const { signToken } = require("../utils/auth");

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
  },

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

    // deleteCharacter: async (parent, { characterId }, context) => {
    //   if (context.user) {
    //     const character = await Characters.findOneAndDelete({
    //       _id: characterId,
    //       createdBy: context.user.username
    //     });
    
    //     await User.findOneAndUpdate(
    //       { _id: context.user._id},
    //       { $pull: { character: character._id}}
    //     )
    //   }
    // }
  },
};



module.exports = resolvers;

//addCharacter
// updateCharacter

