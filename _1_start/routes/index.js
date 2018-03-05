var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'jesse' });
});

router.get('/iffor', function(req, res, next) {
  res.render('ifelsefor', { title: 'jesse' });
});

module.exports = router;
