var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Warehouse' });
});

router.get('/injest', function(req, res, nxt) {
  res.render('inform', { title: 'Injest form'})
});

router.post('/injest', function(req, res, nxt) {
  res.send("not implemented");
});

router.post('/outjest', function(req, res, nxt) {
  res.send("not implemented");
});

router.get('/outjest', function(req, res, nxt) {
  res.render('outform', { title: 'outjest form'})
});

module.exports = router;
