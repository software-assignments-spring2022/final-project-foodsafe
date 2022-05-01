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
const {jwtOptions, jwtStrategy} = require("../jwt-config.js");
const { findOneAndUpdate } = require('../models/registeredUsers');
const { update } = require('lodash');
const {query } = require('express-validator');
 
let usrn='jeffery';
const OPTIONS = ['Milk','Egg','Fish','Crustacean shellfish','Tree Nut','Peanut','Wheat','SoyBean'];
/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});
 
router.post('/list-products/login',(req,res)=>{
   usrn=req.body.username;
   console.log(usrn);
   res.json("haha");
})
router.get('/list-products', async function(req, res, next){
 const user=await userModel.findOne({'username':usrn});
 const allergies=(user.myAllergy||[]).map(num=>OPTIONS[num]);
 console.log(allergies);
 
 const {allergy = [], search = ""} = req.query;
 let filter = {};
 if(allergy.length){
   filter.allergy = {$nin: allergy}
 }
 if(search){
   filter.keywords = {$in: search}
 }
 
 try{
   let products=await ProductModel.find(filter)
   products=products.filter((food)=>allergies.indexOf(food.allergy)===-1?true:false
   )
   res.json(products);
 }catch(err){
   res.json(err);
   console.log("Products not found", err);
 }
 
 
});
 
// router.get('/cartState', function(req,res,next){
//   res.send({data: cartState})
// });
 
 
router.get('/foodtype/:product', async(req,res) => {
 
 const allergies=user.myAllergy||[];
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
 body('password').isLength({ min: 1});
 
 // Finds the validation errors in this request
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
 }
 
 
   //hash the pasword with bcrypt
   let user = new userModel({
       username: req.body.username,
       password: hashSync(req.body.password, 10),
       hasLoggedIn : false
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
 body('password').isLength({ min: 1});
 
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
       // const loginStatus = true;
       // let updateStatus = userModel.findOneAndUpdate({username: username}, loginStatus,{
       //   returnOriginal: false
       // })
 
       // //update haslogged in to true
       // (async () => {
       //   user.hasLoggedIn = true
       //   await user.save()
       // }) ();
      
      
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
 
// router.post ("/loggedBefore", function(req, res){
//     userModel.findOne({username: req.body.username})
//       .then(user =>{
//         return res.json({success: true, loginBefore : user.hasLoggedIn.toString()})
//       })
  
// })
 
 
router.post("/loginStatus", function(req, res){
 //usertest = "test2"
 userModel.findOne({username: req.body.username})
       .then(user =>{
         return res.json(user.hasLoggedIn.toString())
       })
       .catch(err =>{
         res.send({
           message: "no such user"
         })
       })
})
 
//route for logout to check the propoerty of user has loggedin to true first time logging in (has never logged out)
router.post("/logout", function (req, res) {
 userModel.findOne({username : req.body.username})
   .then(user =>{
 
     // (async () => {
     //   user.hasLoggedIn = true
     //   await user.save()
     // }) ();
     user.hasLoggedIn = true
     user.save().then(user => {
         return res.status(200).json({success: true, loginBefore : user.hasLoggedIn.toString()})
     })
 
     //return res.status(200).json({success: true})
   })
})
 
 
 
module.exports = router;
