const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const { products } = require("../db/models");
router.get("/", function(req, res) {
    products.findAll().then(products => {
        console.log("All users:", JSON.stringify(products, null, 4));
        res.json(products)
      })
      .catch(err=>{
        res.send(err);
      });
      
   
});

router.get("/:userId", function(req, res) {
    return queries
        .getProductsByUserId(req.params)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;
