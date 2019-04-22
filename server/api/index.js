const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
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
    return queries.getAllUsers().then(users => {
        res.json(users);
    });
});

router.get("/users/:userId", (req, res) => {
    return queries.getUserById(req.params).then(response => {
        res.json(response);
    });
});

router.get("/prods", function(req, res) {
    queries.getAllProducts().then(products => {
        res.json(products);
    });
});

router.get("/prods/:userId", function(req, res) {
    return queries
        .getProductsByUserId(req.params)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;
