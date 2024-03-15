

const mysql2 = require("mysql2");
const dbconnection = mysql2.createPool({
  //user: process.env.USER,
  //database: process.env.DATABASE,
  //host: "localhost",
  //password: process.env.PASSWORD,
  //connectionLimit: 10,

  host: "sql11.freesqldatabase.com",
database: "sql11691533",
user: "sql11691533",
password: "RqNdu4rzyZ",
port: "3306"
});


// to solve the callback hell
module.exports = dbconnection.promise()

