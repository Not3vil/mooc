var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('job', { title: 'job' });
});

router.post('/job', function(req, res, nxt) {
  res.send("not implemented");
});

//Imolement auth for employees

module.exports = router;
