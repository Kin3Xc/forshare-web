var express = require('express');
var router = express.Router();

var user = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', user.signup);
router.post('/login', user.login);

module.exports = router;
