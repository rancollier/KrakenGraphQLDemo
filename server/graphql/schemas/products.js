const graphql = require("graphql");
const { products, users } = require("../../db/models");
const { UserType } = require("./users")
const {
    GraphQLObjectType ,
    GraphQLFloat,
    GraphQLString,
    GraphQLSchema,
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ()=> ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        descriptions: {type: GraphQLString},
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
module.exports.ProductType = ProductType;
module.exports.product =  {
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
};
//  const RootQuery = new GraphQLObjectType({
//      name: "RootQueryType",
//      fields: {
//         product: {
//             type:ProductType,
//             args: {id: { type: GraphQLString} },
//             resolve(parentValue, args) {
//                 return products.findOne({
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
//      }
//  })

// module.exports = new GraphQLSchema({
//     query: RootQuery
// })
