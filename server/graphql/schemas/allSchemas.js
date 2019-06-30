const graphql = require("graphql");
const { products, users } = require("../../db/models");
const {UserType, ProductType} = require("./types");

const {
    GraphQLObjectType ,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
} = graphql;





 const RootQuery = new GraphQLObjectType({
     name: "RootQueryType",
     fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return users.findOne({
                    where: {
                        id: args.id
                    }
                }).then(product=>{
                    return product
                }).catch(err=>{
                    res.send(err);
                })
            }
        },
        users: {
            type: new GraphQLList(UserType),
            // TODO: figure out how to filter by arguments
            resolve() {
                return users.findAll()
                .then(users=>{
                    return users;
                }).catch(err=>{
                    res.send(err)
                })
            }
        },
        product: {
            type:ProductType,
            args: {id: { type: GraphQLString} },
            resolve(parentValue, args) {
                return products.findOne({
                    where: {
                        id: args.id
                    }
                }).then(product=>{
               
                    return product
                }).catch(err=>{
                    res.send(err);
                })
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve() {
                return products.findAll()
                .then(products=>{
                    return products;
                }).catch(err=>{
                    res.send(err)
                })
            }
        },
     }
    
 })

const mutation = new GraphQLObjectType({
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
        // addProduct: {
        //     type: ProductType, // we may not alwasy return the same type 
        //     args: { // What is expected for the mutation
        //         title:{type: new GraphQLNonNull(GraphQLString)},
        //         descriptions: {type: GraphQLString},
        //         version: {type: GraphQLString},
        //         cost: {type:GraphQLFloat},
        //         eqpStatus: {type:GraphQLString},
        //         userId:{type: new GraphQLNonNull(GraphQLString)},
        //     },
        //     resolve(parentValue, args, request) {
        //         console.log(request)
        //         const {title, descriptions, version, cost, eqpStatus, userId}
        //     }
        // }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation,
})
