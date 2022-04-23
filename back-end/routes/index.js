var express = require('express');
const {body, validationResult } = require('express-validator');
var router = express.Router();
const ProductModel = require('../models/product');
var products = require('../data/products');
var milks = require('../data/milk');
var cereals = require('../data/cereal');
var candies = require('../data/candy');
var cakes = require('../data/cake');
var bakeries = require('../data/bakery');
var cans = require('../data/can');
var frozens = require('../data/frozen')


const {hashSync, compareSync} = require("bcrypt");
const userModel = require('../models/registeredUsers')
const jwt = require("jsonwebtoken")
const {jwtOptions, jwtStrategy} = require("../jwt-config.js")
const {query, validationResult} = require('express-validator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list-products', function(req, res, next){
  query().isLength({min: 1}),
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}
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

// router.get('/cartState', function(req,res,next){
//   res.send({data: cartState})
// });
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
  body('username').isLength({min: 1}),
// password and username must be at least 1 chars long
  body('password').isLength({ min: 1}),

  // Finds the validation errors in this request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }


    //hash the pasword with bcrypt
    let user = new userModel({
        username: req.body.username,
        password: hashSync(req.body.password, 10)
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
  body('username').isLength({min: 1}),
// password and username must be at least 1 chars long
  body('password').isLength({ min: 1}),

  // Finds the validation errors in this request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const username = req.body.username
  const password = req.body.password

  //try to look for user in database
  userModel.findOne({username : username})
    .then(user => {
      //no registered user
      if(!user) return res.status(401).json({success: false, massage: `No such user`})

      //correct username and password
      if(compareSync (req.body.password,user.password)){
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
