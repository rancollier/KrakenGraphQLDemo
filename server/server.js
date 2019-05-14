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

// app.set("trust proxy", 1); // trust first proxy

// app.use(
//     session({
//         name: "session",
//         keys: ["key1", "key2"]
//     })
// );
app.use(cookieParser());
// app.use(cookieParser("mydeepdarksecret"));
// app.use(
//     session({
//         name: "session",
//         keys: ["key1", "key2"],
//         cookie: {
//             secure: true,
//             httpOnly: true,
//             domain: "example.com",
//             path: "foo/bar",
//             expires: expiryDate
//         }
//     })
// );

// var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    // secure: true,
    httpOnly: true,

    domain: 'http://localhost:3000/',
    // path: 'api/prods',
    expires: expiryDate
  }
}))


app.use(cors());
app.use(helmet());
app.use(cookieParser());
const keys = ["keyboard cat"];
const port = 3030;

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
