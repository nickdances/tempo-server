const express = require('express')
const cors = require('cors')

const entriesRouter = require('./routes/entries')
const usersRouter = require('./routes/users')
const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/entries', entriesRouter)


app.use((req, res, next) => {
    let err = {status: 404, message: 'no routes found'}
    return next(err)
})

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err || {message: 'something bad happened'})
})
app.listen(port, () => console.log(`listening on ${port}`))
