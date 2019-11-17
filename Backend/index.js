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
  
  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('MYSQL connected');
  });
  
 /*  con.query("SELECT * FROM accounts", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }); */
con.end((err) => {
})
app.listen('1000', () =>{
    console.log("Server started on 1000")
})
console.log("HELLO!!!")