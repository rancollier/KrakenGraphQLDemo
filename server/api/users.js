const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const sequelize = require("../db/models/user");
const { users } = require("../db/models");

router.get("/", function(req, res) {
    // console.log("get users headers", req.headers);
    // console.log("cookies", req.cookies);
    // console.log("Signed : ", req.signedCookies);
    // console.log("Signed Cookies: ", req.signedCookies.cookie1);
    console.log("SOMETHING")
    console.log(req.signedCookies["session"]);
    console.log(req.signedCookies["cookie1"]);
    console.log(req.cookies)
    return users.findAll().then(users => {
        // res.cookie("cookie1", "This is my first cookie", { signed: true });
        res.json(users);
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
