const express = require("express");
const router = express.Router();
const db = require("../models");
const User = require("../models/user");
const bodyParser = require("body-parser");

const Users = User(db.sequelize, db.Sequelize);

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

router.get("/db", function(req, res) {
    Users.findAll().then(users => res.json(users));
});

module.exports = router;
