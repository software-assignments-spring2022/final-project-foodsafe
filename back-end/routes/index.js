var express = require('express');
var router = express.Router();
var products = require('../data/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list-products', function(req, res, next){
  res.send({data: products});
});

module.exports = router;
