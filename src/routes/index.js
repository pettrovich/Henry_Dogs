const {Router} = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getDogs} = require("../controllers/controllers");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", getDogs);

module.exports = router;
