const express = require("express");
const router = express.Router();

const { users } = require("../../db/models");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");
const passport = require("passport");
router.post("/", (req, res, next) => {
    console.log("registerUser route");
    passport.authenticate("register", (err, user, info) => {
        console.log("user Created by passport");
        if (err) {
            console.log(err);
        }
        if (info != undefined) {
            console.log(info.message);
            res.send(info.message);
        } else {
            req.login(user, err => {
                console.log("now logging in");
                const data = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email
                };

                users
                    .findOne({
                        where: {
                            firstName: data.firstName
                        }
                    })
                    .then(user => {
                        user.update({
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: data.email
                        }).then(() => {
                            console.log("user created in db");
                            res.status(200).send({
                                message: "user created"
                            });
                        });
                    });
            });
        }
    })(req, res, next);
});

module.exports = router;
