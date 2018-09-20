var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

router.get('/users/login', function(req, res, next) {
  console.log(req);
  res.render('/users/login');
});

module.exports = router;
