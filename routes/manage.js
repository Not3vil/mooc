var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('manage', { title: 'Management' });
});

router.post('/additem', function(req, res, nxt) {
  res.send("not implemented");
});

router.post('/addemp', function(req, res, nxt) {
  res.send("not implemented");
});

module.exports = router;