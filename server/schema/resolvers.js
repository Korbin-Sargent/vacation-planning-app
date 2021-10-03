const { Budget, Task, Trip, User} = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");



const resolvers = {

    Query: {
        user: async (parent, args, context) => {
          if (context.user) {
            return User.findOne({ _id: context.user._id });
          }
          throw new AuthenticationError("You need to be logged in!");
        },
      },
      Mutation: {
        addUser: async (parent, {username, password }) => {
          const User = await User.create({ username,password });
          const token = signToken(User);
          return { token, User };
        },

        login: async (parent, { username, password }) => {
          const User = await User.findOne({ username});
          if (!User) {
            throw new AuthenticationError("No profile with this email found!");
          }
          const correctPw = await User.isCorrectPassword(password);
          if (!correctPw) {
            throw new AuthenticationError("Incorrect password!");
          }
          const token = signToken(User);
          return { token, User };
        }, 

        addTrip: async (parent, { userId, trip, title, location, startDate, endDate, description }, context) => {
            // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
            const newTrip = await Trip.create({userId, title, location, startDate, endDate, description})
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: userId },
                {
                  $addToSet: { trip: trip  },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            // If user attempts to execute this mutation and isn’t logged in, throw an error
            throw new AuthenticationError("You need to be logged in!");
        },
}
}
