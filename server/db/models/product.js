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

        },
        {timestamps: false}
    );
    Product.associate = function(models) {
        // associations can be defined here
    };
    return Product;
};


