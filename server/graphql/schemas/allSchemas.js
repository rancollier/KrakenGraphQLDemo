const graphql = require("graphql");
const { products, users } = require("../../db/models");
const {UserType, UserLoggedINType, ProductType, EQPStatusType} = require("./types");
const graphqlFields = require('graphql-fields');
const {eqpStatusData} = require("./data");
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
            resolve(parentValue, args, request, info) {
                const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
                const selectFields = Object.keys(fieldsWithoutTypeName);
                return users.findOne({
                    where: {
                        id: args.id
                    },
                    attributes: selectFields,
                }).then(product=>{
                    return product
                }).catch(err=>{
                    res.send(err);
                })
            }
        },
        userLoggedIn: {
            type: UserLoggedINType,
            resolve(parentValue, args, request, info) {
                const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
                const selectFields = Object.keys(fieldsWithoutTypeName);
                try {
                    const userId = request.user.dataValues.id;
                    const role = ([1,2,109].includes(userId)) ? "admin" : "user";
                    return {...request.user.dataValues, role}
                }
                catch(error) {
                    throw new Error('Not logged in')
                }
            }
        },
        users: {
            type: new GraphQLList(UserType),
            // TODO: figure out how to filter by arguments
            resolve(parentValue, args, request, info) {
                const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
                const selectFields = Object.keys(fieldsWithoutTypeName);
                console.log('test gql get users')
                return users.findAll({
                    attributes: selectFields
                })
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
            resolve(parentValue, args, request, info) {
                const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
                const selectFields = Object.keys(fieldsWithoutTypeName);
                return products.findOne({
                    where: {
                        id: args.id
                    },
                    attributes: selectFields
                }).then(product=>{
               
                    return product
                }).catch(err=>{
                    res.send(err);
                })
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parentValue, args, request, info) {
                const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
                const selectFields = Object.keys(fieldsWithoutTypeName);
                return products.findAll({
                    attributes: selectFields
                })
                .then(products=>{
                    return products;
                }).catch(err=>{
                    res.send(err)
                })
            }
        },
        eqpStatus: {
            type: new GraphQLList(EQPStatusType),
            resolve(parentValue, args, request, info) {
                return eqpStatusData;
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
        addProduct: {
            type: ProductType, // we may not alwasy return the same type 
            args: { // What is expected for the mutation
                title:{type: new GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLString},
                version: {type: GraphQLString},
                cost: {type:GraphQLFloat},
                eqpStatus: {type:GraphQLString},
                // userId:{type: new GraphQLNonNull(GraphQLString)},
                userId: {type:GraphQLString},
            },
            resolve(parentValue, args, request) {
                const userId = request.user.dataValues.id;
                try {
                    const userId = request.user.dataValues.id;
                }
                catch(error) {
                    throw new Error('Not logged in')
                }

                return products.create({
                    ...args,
                    userId
                  })
                  .then(results=>{ 
                    return results;
                }).catch(err=>{return err;})         
            }
        },
        updateProduct: {
            type: ProductType, // we may not alwasy return the same type 
            args: { // What is expected for the mutation
                id: {type: new GraphQLNonNull(GraphQLString)},
                title:{type: GraphQLString},
                description: {type: GraphQLString},
                version: {type: GraphQLString},
                cost: {type:GraphQLFloat},
                eqpStatus: {type:GraphQLString},
            },
           
               

            resolve(parentValue, args, request, info) {
                
                try {
                    const userId = request.user.dataValues.id;
                }
                catch(error) {
                    throw new Error('Not logged in')
                }
                const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
                const selectFields = Object.keys(fieldsWithoutTypeName);
                const prodId = args.id;
                // const updatedArgs = (args.id) ? delete(args.id) : args;
                return products.update(
                    {...args},
                    {
                       
                        where: {id: prodId},
                        returning: true,
                        // plain: true
                    }
                  )
                  
                  .then(results=>{
                 
                    console.log("prodId")
                    // return results;
                    return products.findOne({
                        where: {
                            id: args.id
                        },
                        attributes: selectFields
                    }).then(product=>{
                   
                        return product
                    }).catch(err=>{
                        res.send(err);
                    })
                }).catch(err=>{return err;})         
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation,
})
