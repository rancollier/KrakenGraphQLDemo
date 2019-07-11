
const express = require("express");
const router = express.Router();
const passport = require("passport");

router.use("/", (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (user) {
        req.user = user
      }
      next()
    })(req, res, next)
  })

router.get("/", function(req, res, next) {

    try {
        const userId = request.user.dataValues.id;
        const role = ([1,2,109].includes(userId)) ? "admin" : "user";
        return res.json(request.user.dataValues)
    }
    catch(error) {
        res.send(401, 'Not logged in');
    }
    
   
});


module.exports = router;
