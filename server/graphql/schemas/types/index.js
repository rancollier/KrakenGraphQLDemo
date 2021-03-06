const graphql = require("graphql");
const { products, users } = require("../../../db/models");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
} = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        address1: { type: GraphQLString },
        address2: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        postalCode: { type: GraphQLString },
        country: { type: GraphQLString },
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

module.exports.UserType = UserType; 



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

module.exports.ProductType = ProductType;