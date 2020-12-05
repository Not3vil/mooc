var express = require('express');
var cont = require('../controllers/inven.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Warehouse' });
});

router.get('/injest', function(req, res, nxt) {
  res.render('inform', { title: 'Injest form'})
});

router.post('/injest', cont.injest);
router.post('/outjest', cont.outjest);

router.get('/outjest', function(req, res, nxt) {
  res.render('outform', { title: 'outjest form'})
});

module.exports = router;
