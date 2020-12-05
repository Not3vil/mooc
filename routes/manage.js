var express = require('express');
var contlItem = require('../controllers/item');
var contEmp = require('../controllers/emp')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('manage', { title: 'Management' });
});

router.post('/item/add', contlItem.itemAdd);

router.post('/item/rm', function(req, res, nxt) {
  res.send("not implemented");
});

router.post('/emp/add', contEmp.newEmp);

router.post('/emp/rm', function(req, res, nxt) {
  res.send("not implemented");
});

module.exports = router;
