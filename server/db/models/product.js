"use strict";
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "products",
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            version: DataTypes.STRING
        },
        {}
    );
    Product.associate = function(models) {
        // associations can be defined here
    };
    return Product;
};
