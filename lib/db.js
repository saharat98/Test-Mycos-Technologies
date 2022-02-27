var mysql = require("mysql");
let express = require("express");

// createconnection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mycos",
});
// connect DB
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected database!");
  //Create table
  let sql =
    "CREATE TABLE employee(id int AUTO_INCREMENT,firstname VARCHAR(255),lastname VARCHAR(255),birthday VARCHAR(255),startatwork VARCHAR(255),salary INT,pvdrate INT,PRIMARY KEY(id))";
  con.query(sql, (err) => {
    if (err) {
      throw err;
    }
    console.log("Create complete");
  });
  let post = [
    ["John", "Wick", "02 Sep 1964", "01 March 2004", 46000, 10],
    ["Beyonce", "Knowles", "04 Sep 1981", "16 Sep 2008", 25000, 3],
    ["Justin", "Bieber", "1 March 1994", "01 Dec 2016", 21000, 3],
    ["Justin", "Timberlake", "31 Jan 1981", "20 Jan 2014", 35000, 5],
    ["Taylor", "Swift", "13 Dec 1989", "01 May 2018", 23000, 4],
  ];
  let insertsql =
    "INSERT INTO employee  (firstname, lastname, birthday,startatwork,salary,pvdrate) VALUES ?";
  con.query(insertsql, [post], (err) => {
    if (err) 
      throw err;
    console.log("Insert complete");
  });

});


