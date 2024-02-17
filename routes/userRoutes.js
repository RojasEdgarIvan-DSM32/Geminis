const express = require('express');
const router=express.Router();
const {index} = require('../controllers/usersController')

router.get('/', (req,res) =>{
    res.send('raiz users');
});

module.exports = router;
