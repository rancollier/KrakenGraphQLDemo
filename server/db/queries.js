const db = require("./models");
const queries = {
    getAllUsers: () => {
        return db.sequelize
            .query("SELECT * FROM `products`")
            .then(users => users);
    },
    getUserById: (id = "") => {
        return db.sequelize
            .query("SELECT * FROM `products` where userId = :userId", {
                replacements: { userId: id },
                type: sequelize.QueryTypes.SELECT
            })
            .then(users => users)
            .catch(err);
    }
};

module.exports = queries;
