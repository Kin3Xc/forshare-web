var express = require('express');
var router = express.Router();

var user = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// USERS
router.post('/signup', user.signup);
router.post('/login', user.login);

module.exports = router;
