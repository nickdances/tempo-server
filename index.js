const express = require('express')
const router = require('./routes/resource')
const app = express()

const port = process.env.PORT || 3000

app.use('/resources', router)

app.use(express.json())

app.use((res, res, next) => {
    let err = {status: 404, message: 'no routes found'}
    return next(err)
})

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err || {message: 'something bad happened'})
})
app.listen(port, () => console.log(`listening on ${port}`))
