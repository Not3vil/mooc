var express = require('express');
var router = express.Router();
var cont = require('../controller/job.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('job', { title: 'job' });
});

router.post('/job', cont.showjob);

//Imolement auth for employees

module.exports = router;
