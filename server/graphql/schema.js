const graphql = require("graphql");
const queries = require("../db/queries");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                console.log("args", args);
                return queries
                    .getUserById({ userId: args.id })
                    .then(response => {
                        return response[0];
                    });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
