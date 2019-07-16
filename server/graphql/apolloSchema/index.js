const { gql, AuthenticationError } = require('apollo-server-express');
const graphqlFields = require('graphql-fields');
const { products, users } = require("../../db/models");
const {eqpStatusData} = require("./data")
const fieldsWithoutTypeName = (info) => {
    const fields = graphqlFields(info, {}, { excludedFields: ['__typename'] });
    return Object.keys(fields);
}

const typeDefs = gql`

  type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
        address1: String
        address2: String
        city: String
        state: String
        postalCode: String
        country: String
        deleted: String
        products: [Product]
  }

  type Product {
      id: ID!
      title: String,
      description: String
      version: String
      cost: Float
      eqpStatus: String
      userId: ID!
      deleted: String
      user: User
  }

  type EQAPStatus {
    displayName: String,
    EQPStatus: String
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    products: [Product]
    product(id: ID title: String): Product
    users: [User]
    user(id: ID!): User
    eqpStatus: [EQAPStatus]
  }

  type Mutation {
      updateProduct(
        id: ID!,
        title: String,
        description: String,
        version: String,
        cost: Float,
        eqpStatus: String ,
        deleted: String) : Product!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',

    users: (parent, args, context, info) => {
        
        return users.findAll({
            attributes: fieldsWithoutTypeName(info),
        }).then(users => {
            return users;
        })
    },

    user: (parent, {id}, context, info ) => {
        return users.findOne({
        where: {
            id: id
        },
        attributes: fieldsWithoutTypeName(info),
    }).then(user=>user)},
   
    products: (parent, args, context, info) => {
        return products
            .findAll({
                attributes: fieldsWithoutTypeName(info),
            })
            .then(products => {
                return products;
            }
        )
    },

    product: (parent, args ,context, info ) => {
        const fields = graphqlFields(info, {}, { excludedFields: ['__typename','user'] });
        const keyFields =  Object.keys(fields);
        return products.findOne({
            where: {
                ...args
            },
            attributes: keyFields,
        }).then(product=>product)},

    eqpStatus: (parent, args, contextg, info) => {
        return eqpStatusData;
    }
  },
  Mutation: {
      updateProduct: (parent, args, request, info) => {
          debugger;
        try {
            console.log(request.user)
            const userId = request.user.dataValues.id;
        }
        catch(error) {
            throw new AuthenticationError("You must be logged in")
        }
        const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
        const selectFields = Object.keys(fieldsWithoutTypeName);
        const prodId = args.id;
        return products.update(
            {...args},
            {
               where: {id: prodId},
                returning: true,
                // plain: true
            }
          )
          .then(results=>{
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
  },
  User: {
    products: (user, args, context, info) => {
        return products
        .findAll({
             where: { userId:  user.id},
             attributes: fieldsWithoutTypeName(info),
        })
        .then(products=>{
            return products
        })
    }
  },
  Product: {
      user: (product, args, context, info) => {
          console.log(product)
          console.log(fieldsWithoutTypeName(info))
          return users
          .findOne({ where: {id: product.userId}})
          .then(user=>user)
      }
  }
  

};


module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
