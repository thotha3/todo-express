var express = require('express');
var app = express();

app.use("/:file", function (req, res) {
  console.log("@bug route", req.params.file);
  res.send();
});

app.param("file", function (req, res, next, val) {
  console.log("@bug param", val);
  next();
});

app.listen(3000);