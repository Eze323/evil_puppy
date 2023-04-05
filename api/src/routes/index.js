const { Router } = require('express');
// const getBreeds = require('../controllers/getBreeds');
// const getBreedsByID =require('../controllers/getBreedsByID');
const getDogs = require('../controllers/getDogs');
const getBreedsByName=require('../controllers/getDogsByName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', getDogs);
//router.use('/dogs?name', getBreedsByName);

/*
router.get('/dogs/:idRaza', (req, res)=>{
    const idRaza = req.params;

    const raza= getBreedsByID(idRaza);
})
*/



module.exports = router;
