'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("products", "deleted", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "N"
    });
},

down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("products", "deleted");
}
};