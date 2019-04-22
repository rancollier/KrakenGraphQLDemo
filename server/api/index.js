const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../db/models");
const mysql = require("mysql2");
const User = require("../db/models/user");
const Users = User(db.sequelize, db.Sequelize);
const Product = require("../db/models/product");
const Products = Product(db.sequelize, db.Sequelize);
const queries = require("../db/queries");
router.use(bodyParser.json());
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
});
// define the home page route
router.get("/", function(req, res) {
    res.send("Birds home page");
});

router.get("/users", function(req, res) {
    Users.findAll().then(users => res.json(users));
});

router.get("/prods", function(req, res) {
    queries.getAllUsers().then(users => {
        res.json(users);
    });
    // db.sequelize.query("SELECT * FROM `products`").then(users => {
    //     res.json(users);
    // });
});

router.get("/prods/:byUserId", function(req, res) {
    // res.send("xxx home page");
    // Users.findAll().then(users => res.json(users));
    // Products.findAll().then(prods => res.json(prods));

    db.sequelize
        .query("SELECT * FROM `products` where userId = 1")
        .then(users => {
            res.json(users);
        });
});

module.exports = router;
