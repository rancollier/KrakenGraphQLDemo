const graphql = require("graphql");
const { users, products } = require("../../db/models");
const { ProductType } = require("./products");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = graphql;

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
                return products.findAll({
                    id: parentValue.id
                }).then(users=>{
                    return users
                })
            } 
        }
    })
});

// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         user: {
//             type: UserType,
//             args: { id: { type: GraphQLString } },
//             resolve(parentValue, args) {
//                 return users.findOne({
//                     where: {
//                         id: args.id
//                     }
//                 }).then(product=>{
//                     return product
//                 }).catch(err=>{
//                     res.send(err);
//                 })
//             }
//         }
//     }
// });

// module.exports = new GraphQLSchema({
//     query: RootQuery
// })


module.exports.user = {
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
}


module.exports.UserType = UserType;
// module.exports.UserType = UserType;
