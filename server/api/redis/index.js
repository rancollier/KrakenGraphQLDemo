const express = require("express");
const router = express.Router();
const queries = require("../../db/queries");
const redis = require("../../redis")
router.get("/", function(req, res) {
debugger;
    queries
        .getAllProducts()
        .then(products => {
            res.cookie('test','tester')
            res.cookie("cookie1", "This is my first cookie", {
                
                httpOnly: true
            });
            

            res.json(products);
        })
        .catch(err => {
            res.send(err);
        });
});


module.exports = router;
