require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/route')
require('./database/connect')

tmServer = express()
tmServer.use(cors())
tmServer.use(express.json())
tmServer.use(router)

const PORT = 3000 || process.env.PORT

tmServer.listen(PORT, () => {
    console.log(`Task Manger Server run at port ${PORT}`);

})

tmServer.get('/', (req, res) => {
    res.status(200).send(`<h1 style='color:Green'>Task Manager Server Start.... Waiting for Client Request!!!</h1>`)
})