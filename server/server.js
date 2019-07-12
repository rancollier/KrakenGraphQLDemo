const PORT = 3030;
const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schemas/allSchemas");
const api = require("./api");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const app = express();
// const server = require('http').Server(app);

var app = require('express')();
var server = require('http').Server(app);
// var io = require('socket.io')(server);
console.log("setup socket.io")
const io = require('socket.io')(server,{
  path: '/chat/socket.io'
});
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
  console.log("socket", socket)
  next()
})
io.on('connection', function (socket) {
  console.log("WS CONNECT")
  socket.emit('hello', 'can you hear me?', 1, 2, 'abc'); // emit an event to the socket
  io.emit('broadcast', {msg:'hi'}); // emit an event to all connected sockets
});
 
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
