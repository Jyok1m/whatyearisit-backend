var express = require("express");
var router = express.Router();

require("node-fetch");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ year: 2023 });
});

module.exports = router;
