var express = require('express');
var router = express.Router();

let foods=['foo','bar']
let searchQuery;
router.get('/',(req,res)=>{
    res.json(foods);
})


router.post('/',(req,res)=>{
    queryString=req.body.searchQuery;
})


module.exports = router;
