const video = require("./video")

var cors = require('cors')
const express = require("express")
const app = express()
app.use(cors())
const port = 1000
app.listen(port,()=> console.log("port 1000"))

app.get('/video', (req, res) => {
    let accessToken = video.accessToken(req.query)
    res.send(accessToken)
})