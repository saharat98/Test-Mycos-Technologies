var express = require("express");
var mysql = require("mysql");
const employee = require("./Employee");
var router = express.Router();


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mycos",
});

router.get("/", (req, res, next) => {
  var dataarray = [];
  var total = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected database!");
    con.query("SELECT * FROM mycos.employee", (err, rows) => {
      if (err) {
        res.render("index", { data: "" });
        throw err
      } else {
        rows.map((item) => {
          const data = item;
          const data2 = new employee(
            data.firstname,
            data.lastname,
            data.birthday,
            data.startatwork,
            data.salary,
            data.pvdrate
          );
          dataarray.push(data2.calculatePvdperyear(data.startatwork, data.salary, data.pvdrate));
          total += data2.calculatePvdperyear(
            data.startatwork,
            data.salary,
            data.pvdrate
          );
        });
        res.render("index", { data: dataarray,datatotal:total });
      }
    });
  });
});

module.exports = router;
