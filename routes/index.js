var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let xxx = {
    name : "ducanh", id:"xxxx"  };
  res.render('index', { title: 'Express' ,xxx});

});

module.exports = router;
