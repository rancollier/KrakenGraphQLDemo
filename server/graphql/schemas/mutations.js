const graphql = require("graphql");
const { products, users } = require("../../db/models");
const { UserType, ProductType } = require("./types");
const {
    GraphQLObjectType ,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
} = graphql;


const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType, // we may not alwasy return the same type 
            args: { // What is expected for the mutation
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue, args) {
                const {firstName, lastName, email, password} = args;
                return users.findOrCreate( {
                    where: {email},
                    defaults: {
                        firstName,
                        lastName,
                        password
                    }
                })
                .then(results=>{
                    if(results[1]){ // a new row was created
                        return results[0];
                    }
                    // the row already exists
                    // We need to give an error or something
                    return results[0];
                }).catch(err=>{return err;})
            }
        },
        // TODO: Need to pass down the userId
        addProduct: {
            type: ProductType, // we may not alwasy return the same type 
            args: { // What is expected for the mutation
                title:{type: new GraphQLNonNull(GraphQLString)},
                descriptions: {type: GraphQLString},
                version: {type: GraphQLString},
                cost: {type:GraphQLFloat},
                eqpStatus: {type:GraphQLString},
                userId:{type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue, args, request) {
                const userId = request.user.dataValues.id
                console.log(args)
                products.create({
                    title: 'janedoe',
                    version: "1",
                    cost: "111.11",
                    eqpStatus:"green",
                    userId
                  })
                  .then(results=>{
                    
                    return results;
                }).catch(err=>{return err;})
                const {title, descriptions, version, cost, eqpStatus, userId}
            }
        }
    }
})


module.exports = Mutations;
