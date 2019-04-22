const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Users = require("./users");
const Products = require("./products");

router.use(bodyParser.json());

router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
});

router.get("/", function(req, res) {
    res.send("my fancy api");
});

router.use("/users", Users);
router.use("/prods", Products);

module.exports = router;
