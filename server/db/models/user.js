"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "users",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            address1: DataTypes.STRING,
            address2: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            postalCode: DataTypes.STRING,
            country: DataTypes.STRING,
            password: DataTypes.STRING,
            deleted: DataTypes.STRING,
        },
        {}
    );
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
