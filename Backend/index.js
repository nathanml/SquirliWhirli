const express = require("express");
const app = express();
const sql = require("mysql");
const port = 1000

const app = express();
app.listen('1000', () =>{
    console.log("Server started on 1000")
}

app.listen(port,()=> console.log("port 1000"))