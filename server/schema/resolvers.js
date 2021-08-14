const { AuthenticationError } = require("apollo-server-express");

const { User, Character } = require("../models");
const { populate } = require("../models/Character");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("characters");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    character: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.findById({
          _id: characterId,
        });
        console.log(character);
        return character;
      }
      throw console.error("No character by this name");
    },

    userCharacters: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate("characters")
          .exec();
        console.log("Inside userCharacters", userData);

        return userData.characters;
      }
    },

    getAllCharacters: async (parent, {}, context) => {
      const allCharacters = await Character.find();
      console.log(allCharacters);
      return allCharacters;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addCharacter: async (parent, { characterInput }, context) => {
      console.log(characterInput);

      // const updatedCharacter = await Character.findByIdAndUpdate(
      //   { _id: newCharacter._id },
      //   { $push: { user: context.user._id } },
      //   { new: true }
      // )
      //   .populate("user")
        
    

      if (context.user) {
        const newCharacter = await Character.create(characterInput);

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { characters: newCharacter._id } },
          { new: true }
        )
          .populate("characters")
          .exec();
        // console.log("before return", updatedUser, newCharacter);
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in");
    },

    deleteCharacter: async (parent, { characterId }, context) => {
      console.log(characterId);

      if (context.user) {
        console.log(context.user);
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { characters: characterId } },
          { new: true }
        );

        const character = await Character.findOneAndDelete({
          _id: characterId,
        });
        console.log(updatedUser.characters);
        return updatedUser;
      }
    },

    updateCharacter: async (
      parent,
      { characterId, characterInput },
      context
    ) => {
      if (context.user) {
        console.log(characterInput);
        const updatedCharacter = await Character.findByIdAndUpdate(
          { _id: characterId },
          {
            name: characterInput.name,
            race: characterInput.race,
            image: characterInput.image,
            class: characterInput.class,
            background: characterInput.background,
          },
          { new: true }
        );

        console.log(updatedCharacter);
      }
    },
  },
};
module.exports = resolvers;
