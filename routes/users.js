var express = require('express');
var router = express.Router();
var Request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user resource');
});

router.get('/login', function(req, res, next) {
  res.render('usr/login');
});
router.post('/login', function(req, res, next) {
  var sUser = req.body.Username;
  var sPass = req.body.Password;
  //console.log(req);
  Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:2999/users/"+sUser,
      "body": JSON.stringify({"Id":"1","Title":"Go to Market tomorrow","Status":"done"})
    }, (error, response, body) => {
      if(error) {
        return console.dir(error);
      }
      console.dir(JSON.parse(body));
    });
  res.render('../index');
});

router.get('/logout', function(req, res, next) {
  res.render('usr/logout');
});
router.post('/logout', function(req, res, next) {
  res.render('usr/logout');
});

module.exports = router;