const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Users = require("./users");
const Products = require("./products");
const passport = require("passport");
require("./config/passport");
const RegisterUser = require("./login/regisgterUser");


// const FindUser = require("./login/findUser");
const LoginUser = require("./login/loginUser");
const LogOutUser = require("./login/logOutUser");

router.use(bodyParser.json());
// router.use(passport.initialize());

router.use(function (req, res, next) {
   res.locals['test']="mytest"
    next();
});

router.get("/", function(req, res) {
    res.send("my fancy api");
});


router.use("/loginUser", LoginUser);
router.use("/registerUser", RegisterUser);
router.use("/users", Users);
router.use("/prods", Products);
router.use(
    "/pretectedProds",
    passport.authenticate("jwt", { session: false }),
    Products
);
// router.use("/logOut", passport.authenticate("jwt", { session: false }), LogOutUser);

module.exports = router;
