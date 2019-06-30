const express = require("express");
const router = express.Router();
const { products } = require("../db/models");
router.get("/", function(req, res) {
    products
        .findAll()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get("/:userId", function(req, res) {
    return products
        .findAll({
            where: { userId: req.params.userId }
        })
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;
