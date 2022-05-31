const {Router} = require('express');
const {getAllDogs,getDogsByName,getDogsById} = require("../controllers/dogs");
const router = Router();

router.get('/', async (req,res) => {
    let {name} = req.query;
    if (name) return await getDogsByName(name,res);
    else return await getAllDogs(res);
});

router.get('/:idRaza', (req,res) => {
    let {idRaza} = req.params;
    return getDogsById(idRaza,res);
});

module.exports = router;