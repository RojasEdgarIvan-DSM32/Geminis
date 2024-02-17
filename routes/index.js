const express = require('express');
const router = express.Router();

    router.get('/', (req,res) => {
        res.send('estamos en raiz');
    });

    router.get('/nosotros', (req,res) =>{
        res.send('estamos en nosotros en archivos diferentes');
    });
    
    module.exports = router;