var express = require('express');
var router = express.Router();

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
router.get('/',(req,res)=>{
    console.log(Allergies);
    res.json(Allergies);
})

//expect to receive an array of number
router.post('/',async(req,res)=>{
    Allergies=req.body.newAllergies;
    console.log(Allergies);
})

module.exports = router;

