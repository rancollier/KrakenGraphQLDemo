const express = require("express");
const helmet = require("helmet");
const app = express();
const hello = require("./hello");

app.use(helmet());
const port = 3030;

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/hello", hello);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
