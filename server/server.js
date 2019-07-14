const PORT = 3030;
const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schemas/allSchemas");
const api = require("./api");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = require('express')();
const server = require('http').Server(app);
const redisAdapter = require('socket.io-redis');
 
var io = require('./sockets').initialize(server,{
  path: '/chat/socket.io'
}).adapter(redisAdapter(`${process.env.REDIS_URL}`));
// io.adapter(redisAdapter(`${process.env.REDIS_URL}`))
// io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
module.exports.io = io;
require("./sockets/consumer")(io)
// const io = require('socket.io')(server,{
//   path: '/chat/socket.io'
// });
server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


const passport = require("passport");
require("./api/config/passport");
app.use(passport.initialize());

const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour


// TODO remove?
app.set('trust proxy', 1) // trust first proxy



// app.use(compress());
app.use(cors());
app.use(helmet());
app.use(cookieParser());
const keys = ["keyboard cat"];

io.use((socket, next)=>{
  next()
})


app.get("/", (req, res) => res.send("Hello World!"));

app.use('/graphql', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (user) {
        req.user = user
      }
      next()
    })(req, res, next)
  })

app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true,
        
    })
);


app.use("/api", api);
app.use(function(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: err });
    } else {
        next(err);
    }
});
// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
