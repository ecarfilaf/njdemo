var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user resource');
});

router.get('/login', function(req, res, next) {
  res.render('usr/login');
});

router.get('/logout', function(req, res, next) {
  res.render('usr/logout');
});

module.exports = router;