var express = require("express");
var router = express.Router();

const mysql = require("mysql2/promise");

async function main() {
    // get the client
    // const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "test"
    });
    // query database
    const [rows, fields] = await connection.execute(
        "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
        ["Morty", 14]
    );
    return { rows, fields };
}

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
});
// define the home page route
router.get("/", function(req, res) {
    res.send("Birds home page");
});

router.get("/db", function(req, res) {
    res.send(main());
});

module.exports = router;
