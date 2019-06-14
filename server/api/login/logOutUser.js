const redisClient = require("../../redis");

const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    redisClient.setTokenToBlacklist(req.cookies["token"], req.user.tokenExp);
    res.cookie("token", "", {
        httpOnly: true
        // secure: true
    });
    res.json({ msg: "logged out" });
});

module.exports = router;
