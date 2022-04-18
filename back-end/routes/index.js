var express = require('express');
var router = express.Router();
const ProductModel = require('../models/product');
//var products = require('../data/products');
var milks = require('../data/milk');
var cereals = require('../data/cereal');
var candies = require('../data/candy');
var cakes = require('../data/cake');
var bakeries = require('../data/bakery');
var cans = require('../data/can');
var frozens = require('../data/frozen')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list-products', function(req, res, next){
  const {allergy = [], search = ""} = req.query;
  
  let filter = {};
  if(allergy.length){
    filter.allergy = {$nin: allergy}
  }
  if(search){
    filter.keywords = {$in: search}
  }

  ProductModel.find(filter)
  .then((products) => res.json(products))
  .catch((err) => {
    res.json(err);
    console.log("Products not found", err);
  });
  //res.send({data: products});
});

router.get('/cart-state', function(req,res,next){
  res.send({data: cartState})
});
router.get('/foodtype/:product', (req,res) => {
  if(req.params.product === "milk"){
    res.send({data : milks});

  }
  else if (req.params.product === "candy"){
    res.send({data : candies});

  }
  else if (req.params.product === "can"){
    res.send({data : cans});

  }
  else if (req.params.product === "bakery"){
    res.send({data : bakeries});

  }
  else if (req.params.product === "cereal"){
    res.send({data : cereals});

  }
  else if (req.params.product === "cake"){
    res.send({data : cakes});

  }

  else if (req.params.product === "frozen"){
    res.send({data : frozens});

  }
  
})





module.exports = router;
