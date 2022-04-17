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


router.get('/',(req,res)=>{
    res.json(Allergies);
})

//expect to receive an array of number
const {body, validationResult}=require('express-validator');
router.post('/',async(req,res)=>{
    body('newAllergies').isLength({min: 0});
    const errors= validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Allergies=req.body.newAllergies;
    console.log(Allergies);
})

module.exports = router;

