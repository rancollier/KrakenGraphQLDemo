const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

router.get("/", function(req, res) {
    queries
        .getAllProducts()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get("/:userId", function(req, res) {
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