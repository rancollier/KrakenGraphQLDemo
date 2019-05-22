const express = require("express");
const router = express.Router();
const queries = require("../../db/queries");

router
    .route("/")
    .get(function(req, res) {
        throw new Error("Bad route");
    })
    .post(function(req, res) {
        throw new Error("incorrect login");
    })
    .put(function(req, res) {
        const { userName, password } = req.body;
        return queries
            .getUserByUsername({
                firstName: userName
            })
            .then(response => {
                res.json(response);
            })
            .catch(error => {
                throw new Error("incorrect login");
            });
    });

module.exports = router;
