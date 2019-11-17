const express = require("express");
const mysql = require("mysql");
const port = 1000
const app = express();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password",
    database:"squirlidb",
    port: '1000'
  });
  
con.connect();
console.log("MySQL connected")

con.query('SELECT * FROM doctors', function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
    console.log("DATA FROM DOCTORS")
  });

app.listen('1000', () =>{
    console.log("Server started on 1000")
})
console.log("HELLO!!!")
con.end();