"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            description: {
                type: Sequelize.STRING(1000)
            },
            version: {
                allowNull: false,
                type: Sequelize.STRING(12)
            },
            cost: {
                type: Sequelize.FLOAT(5, 2)
            },
            eqpStatus: {
                type: Sequelize.STRING
            },
            userId: {
                type: Sequelize.STRING
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("products");
    }
};
