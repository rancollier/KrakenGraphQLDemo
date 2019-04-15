const express = require('express')
const helmet = require('helmet')
const app = express()
app.use(helmet())
const port = 3030

app.get('/', (req, res) => res.send('Hello World!?!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))