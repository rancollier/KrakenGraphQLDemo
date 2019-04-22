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

// id: {
//     allowNull: false,
//         autoIncrement: true,
//             primaryKey: true,
//                 type: Sequelize.INTEGER
// },
// title: {
//     allowNull: false,
//         type: Sequelize.STRING(100)
// },
// description: {
//     type: Sequelize.STRING(1000)
// },
// version: {
//     allowNull: false,
//         type: Sequelize.STRING(12)
// },
// cost: {
//     type: Sequelize.FLOAT(5, 2)
// },
// eqpStatus: {
//     type: Sequelize.STRING
// },
// userId: {
//     type: Sequelize.STRING
// }
