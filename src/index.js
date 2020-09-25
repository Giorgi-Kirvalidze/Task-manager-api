const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRounter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json()) //it automatically parses object
app.use(userRouter)
app.use(taskRounter)

app.listen(port, () => {
    console.log('Sever is up on port' + port)
})
