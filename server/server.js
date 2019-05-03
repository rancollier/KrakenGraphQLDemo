const express = require("express");
const helmet = require("helmet");
const app = express();
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schema");
const api = require("./api");
const cors = require("cors");
const methodOverride = require("method-override");

app.use(cors());
app.use(helmet());

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
