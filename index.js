const express = require('express')
const router = require('./routes/resource')
const app = express()

const port = process.env.PORT || 3000

app.use('/resources', router)

app.use(express.json())

app.listen(port, () => console.log(`listening on ${port}`))
