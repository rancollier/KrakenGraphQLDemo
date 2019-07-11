"use strict";
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
                beforeValidate:  (product, options) => {
                    console.log("products beforeValidate")
                  }
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


