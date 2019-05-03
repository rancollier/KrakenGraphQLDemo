const db = require("./models");
const queries = {
    getAllUsers: () => {
        return db.sequelize
            .query("SELECT * FROM users", {
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(users => users);
    },
    getUserById: ({ userId = "" }) => {
        return db.sequelize
            .query("SELECT * FROM users WHERE id=:userId", {
                replacements: { userId },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(results => results);
    },
    getUserByLogin: ({ userName, password }) => {
        return db.sequelize.query(
            `
            SELECT firstName, lastName 
            FROM users 
            WHERE 
                firstName=:userName
            AND
                password=:password
        `,
            {
                replacements: { userName, password },
                type: db.sequelize.QueryTypes.SELECT
            }
        );
    },
    getAllProducts: () => {
        return db.sequelize
            .query("SELECT * FROM products", {
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(products => products);
    },
    getProductsByUserId: ({ userId }) => {
        return db.sequelize
            .query("SELECT * FROM products WHERE userId=:userId", {
                replacements: { userId },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(products => products);
    }
};

module.exports = queries;
