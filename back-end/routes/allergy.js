var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const userModel=mongoose.model('registeredUser');
let Allergies=[];
//['Milk','Egg','Fish','Crustacean shellfish','Tree Nut','Peanut','Wheat','SoyBean'];
/*
const ifAllergic={
    'Milk':false,
    'Egg':false,
    'Fish':false,
    'Crustacean shellfish':false,
    'Tree Nut':false,
    'Peanut':false,
    'Wheat':false,
    'SoyBean':false,
}*/


//this is used for the introduction page (only once)
//expect to receive an array of number

//assume the user is logged
let username='jeffery';
/*
router.get('/login',(req,res)=>{
    res.json("Allergies");
})
*/
router.post('/login',(req,res)=>{
    username=req.body.username;
    console.log(username);
    res.json("Allergies");
})

router.get('/',async(req,res)=>{
   const user=await userModel.findOne({'username':username});
    console.log(user);
    user.myAllergy=user.myAllergy||[];
    //console.log(Allergies);
    res.json(user.myAllergy);
})

//expect to receive an array of number
router.post('/',async(req,res)=>{
    const user=await userModel.findOne({'username':username});
    user.myAllergy=req.body.newAllergies;
    await user.save();
    console.log(user);
})

module.exports = router;

