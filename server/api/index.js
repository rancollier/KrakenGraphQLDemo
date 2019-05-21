const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Users = require("./users");
const Products = require("./products");
const Login = require("./login");
const passport = require("passport");
const Protect = require("./login/findUser");
const RegisterUser = require("./login/regisgterUser");
require("./config/passport");

const FindUser = require("./login/findUser");
const LoginUser = require("./login/loginUser");
router.use(bodyParser.json());
router.use(passport.initialize());
router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());

    next();
});

router.get("/", function(req, res) {
    res.send("my fancy api");
});
router.use("/findUser", FindUser);
router.use("/loginUser", LoginUser);
router.use("/registerUser", RegisterUser);
router.use("/users", Users);
router.use("/prods", Products);
router.use('/pretectedProds',passport.authenticate('jwt', {session: false}), Products);
// router.use('/pretectedProds',Protect, Products);

module.exports = router;
