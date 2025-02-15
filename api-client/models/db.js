const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");


// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  port: dbConfig.PORT,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

setTimeout(function(){
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
}, 5 * 1000);
module.exports = connection;

