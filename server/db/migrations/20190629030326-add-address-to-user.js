"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('users', 'address1', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('users', 'address2', {
                    type: Sequelize.STRING,
                }, { transaction: t }),
                queryInterface.addColumn('users', 'postalCode', {
                    type: Sequelize.STRING,
                }, { transaction: t }),
                queryInterface.addColumn('users', 'city', {
                    type: Sequelize.STRING,
                }, { transaction: t }),
                queryInterface.addColumn('users', 'state', {
                    type: Sequelize.STRING,
                }, { transaction: t }),
                queryInterface.addColumn('users', 'country', {
                    type: Sequelize.STRING,
                }, { transaction: t })
            ])
        })

        
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('users', 'address1', { transaction: t }),
                queryInterface.removeColumn('users', 'address2', { transaction: t }),
                queryInterface.removeColumn('users', 'city', { transaction: t }),
                queryInterface.removeColumn('users', 'state', { transaction: t }),
                queryInterface.removeColumn('users', 'country', { transaction: t }),
                queryInterface.removeColumn('users', 'postalCode', { transaction: t }),
            ])
        })
    }
};
