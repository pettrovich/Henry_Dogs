const {Router} = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsMiddleware = require ('./dogs');
const temperamentMiddleware = require ('./temperament');
const dogMiddlewaree = require ('./dog');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsMiddleware);
router.use("/temperament", temperamentMiddleware);
router.use("/dog", dogMiddlewaree);

router.get('/', (req, res) => {
    res.send('Henry Dogs');
  });

// router.get("/dogs", getDogs);

module.exports = router;
