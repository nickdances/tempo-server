const express = require('express')
const cors = require('cors')

const entriesRouter = require('./routes/entries')
const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use('/entries', entriesRouter)

app.use(express.json())

app.listen(port, () => console.log(`listening on ${port}`))
