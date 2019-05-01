const express = require("express");
const helmet = require("helmet");
const app = express();
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schema");
const api = require("./api");
const cors = require("cors");

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
