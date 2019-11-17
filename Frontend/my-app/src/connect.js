const express = require("express");
const app = express();
const mysql = require("mysql")
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

//open the database

let dbase = new mysql.Database("./untitled.db", mysql.OPEN_READWRITE, (err) =>{
	if(err){
		console.error(err.message)

	}
console.log("Database accessed")
})

export default dbase;