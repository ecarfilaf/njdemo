var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

router.get('/users/login', function(req, res, next) {
<<<<<<< HEAD
  console.log(req);
  res.render('/users/login');
});
=======
  res.render('users/login');
});

>>>>>>> 078a64bed3e3d2a5e71d20ef59d5b2261189b28a

module.exports = router;
