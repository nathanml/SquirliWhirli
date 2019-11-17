const express = require("express");
const sql = require("mysql");
const port = 1000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'nodemysql'
});

db.connect(function(()=> {
    if(err){
        throw err;
    }
    else{
        console.log("MySQL connected")
    }
})
const app = express();

app.listen('1000', () =>{
    console.log("Server started on 1000")
})

app.listen(port,()=> console.log("port 1000"))