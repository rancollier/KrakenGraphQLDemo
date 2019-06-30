const express = require("express");
const router = express.Router();

const { users } = require("../../db/models");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");
const passport = require("passport");
// const OneHour = Math.floor(Date.now() / 1000) + 60 * 60;
// const ThiryMin = Math.floor(Date.now() / 1000) + 60 * 30;
const TenMin = () => Math.floor(Date.now() / 1000) + 60 * 10;

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
                        const exp = TenMin();
                        const token = jwt.sign(
                            {
                                exp,
                                id: user.id
                            },
                            jwtSecret.secret
                        );
                    

                        res.cookie("token", token, {
                            httpOnly: true
                            // secure: true
                        });
                        res.cookie("tokenExpiration", exp);
                  
                        res.status(200).send({
                            auth: true,
                            message: "user found & logged in"
                        });
                    });
            });
        }
    })(req, res, next);
});

module.exports = router;
