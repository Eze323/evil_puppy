const axios = require('axios');
const {Temperament} = require("../db");
const URL = 'https://api.thedogapi.com/v1/breeds/';

const getAllTemperament=async ()=>{
    const temperamentApiRaw = (
                                await axios.get(`https://api.thedogapi.com/v1/breeds/`)
                              ) 
                              .data;
    const arrayTemperaments=temperamentApiRaw.map((dog)=>{return dog.temperament})                              
    
    const arrayTempemodificado=arrayTemperaments.filter((elemento,indice)=>{return arrayTemperaments.indexOf(elemento===indice)});

    return arrayTempemodificado;
}

module.exports={getAllTemperament};