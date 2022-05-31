const {Router} = require('express');
const {Dog, Temperament} = require('../db');
const router = Router();

router.get('/', (req,res) => {
    return 0;
});

module.exports = router;