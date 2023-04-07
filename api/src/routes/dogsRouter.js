
const { Router} =require("express");
const {getDogHandler,getDogsHandler, createDogHandler} = require("../handlers/dogsHandlers");
const dogsRouter = Router();

dogsRouter.get('/', getDogsHandler);

dogsRouter.get('/:idRaza', getDogHandler);
dogsRouter.post('/', createDogHandler);

module.exports = dogsRouter;






