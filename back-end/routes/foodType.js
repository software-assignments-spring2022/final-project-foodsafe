var express = require('express');
var router = express.Router();

let foods=['candy','nut','butter','coke','beef','lobster','milk']
let searchQuery;
router.get('/',(req,res)=>{
    res.json(foods);
})


router.post('/',(req,res)=>{
    queryString=req.body.searchQuery;
})


module.exports = router;
