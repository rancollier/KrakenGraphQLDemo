const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const app = express();
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schema");
const api = require("./api");
const cors = require("cors");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
// TODO remove?
app.set('trust proxy', 1) // trust first proxy

// TODO remove?
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,

    domain: 'http://localhost:3000',
    path: '/',
    expires: expiryDate
  }
}))


app.use(cors());
app.use(helmet());
app.use(cookieParser());
const keys = ["keyboard cat"];
const port = 3030;

// TODO remove?
app.use(function (req, res, next) {
    res.cookie('howdy','doody')

     // secure: true,
//     httpOnly: true,


    next()
  })




app.get("/", (req, res) => res.send("Hello World!"));

app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
