const express = require("express");
const router = express.Router();
const queries = require("../../db/queries");
const { Users } = require("../../db/models");

router
    .route("/")
    .get(function(req, res) {
        throw new Error("Bad route");
    })
    .post(function(req, res) {
        console.log(req.body);
        // res.json(req.body);
        throw new Error("incorrect login");
    })
    .put(function(req, res) {
        const { userName, password } = req.body;
        return (
            queries
                .getUserByUsername({
                    firstName: userName
                })
                .then(response => {
                    console.log("findUser1", response);
                    res.json(response);
                })
                // return queries
                //     .getUserByLogin({
                //         userName,
                //         password
                //     })
                //     .then(response => {
                //         try {
                //             if (response.length === 1) {
                //                 if (password === "password") {
                //                     res.status(401).send({
                //                         error: "Change initial password"
                //                     });
                //                 }
                //                 res.json({ msg: "great" });
                //             } else {
                //                 // throw new Error("incorrect login");
                //                 res.status(401).send({ error: "Incorrect login" });
                //                 // throw Error("incorrect login");
                //             }
                //         } catch (err) {
                //             next(err);
                //         }
                //    })
                .catch(error => {
                    throw new Error("incorrect login");
                })
        );
        // res.json(req.body);
    });

module.exports = router;
