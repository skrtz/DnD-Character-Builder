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

    // character: async (parent, { characterId }, context) => {
    //   if (context.user) {
    //     const character = await Character.findById({
    //       _id: characterId,
    //     });
        
    //     return character;
    //   }
    //   throw console.error("No character by this name");
      
    //   return character;
    // },

    character: async (parent, { characterId }, context) => {
      const character = await Character.findById({
        _id: characterId,
      });
      // const character = await Character.find({
      //   name: characterId,
      // });
      
      return character;
    },

    userCharacters: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate("characters")
          .exec();
        

        return userData.characters;
      }
    },

    getAllCharacters: async (parent, {}, context) => {
      const allCharacters = await Character.find();
      
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
        ;
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in");
    },

    deleteCharacter: async (parent, { characterId }, context) => {
      

      if (context.user) {
        
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { characters: characterId } },
          { new: true }
        );

        const character = await Character.findOneAndDelete({
          _id: characterId,
        });
        
        return updatedUser;
      }
    },

    updateCharacter: async (
      parent,
      { characterId, characterInput },
      context
    ) => {
      if (context.user) {
       
        const updatedCharacter = await Character.findByIdAndUpdate(
          { _id: characterId },
          {
            name: characterInput.name,
            race: characterInput.race,
            image: characterInput.image,
            class: characterInput.class,
            strength: characterInput.strength,
            dexterity: characterInput.dexterity,
            constitution: characterInput.constitution,
            intelligence: characterInput.intelligence,
            wisdom: characterInput.wisdom,
            charisma:characterInput.charisma,
            background: characterInput.background,
            alignment: characterInput.alignment,
            weapons: characterInput.weapons,
            items: characterInput.items
          },
          { new: true }
        );

        
      }
    },
  },
};
module.exports = resolvers;
