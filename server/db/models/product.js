"use strict";
const io = require('socket.io-emitter')(`${process.env.REDIS_URL}`);
// setInterval(function(){
//   io.emit('time', new Date);
// }, 5000);

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "products",
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            version: DataTypes.STRING,
            cost: DataTypes.STRING,
            eqpStatus: DataTypes.STRING,
            userId: DataTypes.STRING,
            deleted: DataTypes.STRING,
        },
        {
            timestamps: false,
            hooks: {
                beforeValidate: (product, options) => {
                    console.log("products beforeValidate")
                },
                beforeUpdate: (product, options) => {
                    console.log("products beforeUpdate")
                },
                afterCreate: (product, options) => {
                    console.log("products afterCreate")
                },
                afterDestroy: (product, options) => {
                    console.log("products afterDestroy")
                },
                afterUpdate: (product, options) => {
                    console.log("products afterUpdate")
                },
                afterBulkUpdate: (product, options) => {
                    io.emit("updateProuct", {product: product.attributes})
                  
                    // socket.emit('hello', 'can you hear me?', 1, 2, 'abc'); // emit an event to the socket
                    // io.emit('broadcast', {msg:product}); // emit an event to all connected sockets
                },
            }
        },
        
    );
    Product.addHook('beforeValidate', (product, options) => {
        console.log("beforeValidate")
      });
    Product.associate = function(models) {
        // associations can be defined here
    };
    return Product;
};


