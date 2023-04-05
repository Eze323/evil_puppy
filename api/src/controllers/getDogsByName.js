const axios = require('axios');
const router= require('../routes/index');
const URL='https://api.thedogapi.com/v1/breeds?limit=10&page=0';

const getBreedsByName =async (req, res)=>{
    const name =  req.query

    if(!name){
    res.status(200).send(name);
}
}

module.exports= getBreedsByName;