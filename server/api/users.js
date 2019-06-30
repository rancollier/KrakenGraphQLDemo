const express = require("express");
const router = express.Router();
const { users } = require("../db/models");

router.get("/", function(req, res) {
    // debugger;
    // console.log("SOMETHING")
    // console.log("session",req.signedCookies["session"]);
    // console.log("cookie1",req.signedCookies["cookie1"]);
    // console.log("test",req.signedCookies["test"]);
    // console.log("req.signedCookies",req.signedCookies)
    // console.log("req.cookies",req.cookies)
    return users.findAll().then(users => {
        // res.cookie("cookie1", "This is my first cookie", { signed: true });
        res.json(users);
    });
});

router.get("/:userId", (req, res) => {
    return users.findOne({
        where: {
            id: req.params.userId
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.send(err);
    });
});

module.exports = router;
