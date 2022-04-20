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


const userModel = require('../models/registeredUsers')
const jwt = require("jsonwebtoken")
const { jwtOptions, jwtStrategy } = require("../jwt-config.js") 



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

//route for handling register new user
router.post('/register', (req, res) => {
    let user = new userModel({
        username: req.body.username,
        password: req.body.password
    })

    //insert data to moongose
    user.save()
      .then(user=> {
        res.send({
          success : true,
          message : `User ${username} created successfully `,
          user : {
            username : user.username
          }
        })
      })
      .catch(err=> {
        res.send({
          success : false,
          message:  "Unable to create user",
          error: err
        })
      })
  })

//route for handling login
router.post('/login', function(req, res){
  const username = req.body.username
  const password = req.body.password

  //try to look for user in database
  userModel.findOne({username : username})
    .then(user => {
      //no registered user
      if(!user) return res.status(401).json({success: false, massage: `No such user`})

      //correct username and password
      if(req.body.password == user.password){
        const payload = {
            username: user.username,
            id : user.id
        }
        const token = jwt.sign(payload, jwtOptions.secretOrKey)
        return res.json({success: true, message: "Successful Login", token: token})
      }else{
          //// incorrect password
        return res.status(401).json({success: false, message: "Incorrect password"})
      }
    })

})



module.exports = router;
