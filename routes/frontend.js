const express = require('express');
const router = express.Router();
const db = require('../database/connection');


router.get('/',(req,res)=>{
    res.render('frontend/index');
});
router.get('/contato', (req, res) => {
    res.render('frontend/contato')
})

module.exports = router;