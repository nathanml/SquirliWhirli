const express = require("express");
const app = express();
const mysql = require("mysql")
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

//open the database

let dbase = new mysql.Database("", mysql.OPEN_READWRITE, (err) =>{
	if(err){
		console.error(err.message)

	}
console.log("Database accessed")
})

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '../bostonhacksdb.mwb'
});