const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

router.get("/", function(req, res) {
    return queries
        .getAllUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get("/:userId", (req, res) => {
    return queries
        .getUserById(req.params)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;
