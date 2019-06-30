const graphql = require("graphql");
const {
    GraphQLObjectType ,
   
    GraphQLSchema,
} = graphql;

const {product} = require("./products")
const {user} = require("./users")
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
       product,
       user,
    }
})

module.exports = new GraphQLSchema({
   query: RootQuery
})