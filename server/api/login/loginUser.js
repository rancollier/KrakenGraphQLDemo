const express = require("express");
const router = express.Router();

const { users } = require("../../db/models");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");
const passport = require("passport");
router.put("/", function(req, res, next) {
    console.log(req.body);
    passport.authenticate("login", (err, user, info) => {
        if (err) {
            console.log("err", err);
        }
        if (info != undefined) {
            console.log(info.message);
            res.send(info.message);
        } else {
            console.log("yes");
            req.login(user, err => {
                users
                    .findOne({
                        where: {
                            firstName: user.firstName
                        }
                    })
                    .then(user => {
                        console.log(
                            "findUser and set create cookie and apply token"
                        );
                        // res.cookie("cart", { items: [1, 2, 3] });
                        const token = jwt.sign(
                            { id: user.id },
                            jwtSecret.secret
                        );
                        // res.cookie("token", "tobi", { signed: true });
                        // res.cookie("cookie1", "This is my first cookie", {
                        //     signed: true,
                        //     maxAge: 1000 * 60 * 60 * 24 * 7,
                        //     httpOnly: true
                        // });

                        res.cookie("token", token, {
                            httpOnly: true,
                            // secure: true
                        });
                        // res.cookie("rememberme", "123456", {
                        //     expires: new Date(Date.now() + 900000),
                        //     httpOnly: true
                        // });
                        // console.log("set cookies");
                        res.status(200).send({
                            auth: true,
                            token: token,
                            message: "user found & logged in"
                        });
                    });
            });
        }
    })(req, res, next);
});

module.exports = router;
