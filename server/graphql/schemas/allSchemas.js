const graphql = require("graphql");
const { products, users } = require("../../db/models");

const {
    GraphQLObjectType ,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ()=> ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        version: {type: GraphQLString},
        cost: {type:GraphQLFloat},
        eqpStatus: {type:GraphQLString},
        userId:{type:GraphQLString},
        deleted: {type:GraphQLString},
        user: {
            type: UserType,
            resolve(parentValue, args){
                const userId = parentValue.userId
                return users.findOne({
                    here: {
                        id: userId,
                    }
                })
            }
        }
    })
})






const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        deleted: {type:GraphQLString},
        products: {
            type: new GraphQLList(ProductType),
            resolve(parentValue, args) {
                
                return products.findAll({ where: { id:  parentValue.id} }).then(users=>{
                    console.log("users")
                    console.log(users)
                    return users
                })
            }
        }
    })
});





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
        }
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
        //     resolve(parentValue, args) {
        //         const {title, descriptions, version, cost, eqpStatus, userId}

        //     }
        // }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation,
})
