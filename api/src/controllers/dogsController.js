const axios = require('axios');
const {Dog} = require("../db");
const {Op} = require("sequelize");
const URL = 'https://api.thedogapi.com/v1/breeds/';

const cleanArray = (array) =>
    array.map(elemento=>{
        return {
            id:elemento.id,
            name:elemento.name,
            image:elemento.image.url,
            height:elemento.height.metric,
            weight:elemento.weight.metric,
            lifeSpan:elemento.lifeSpan,
            temperament:elemento.temperament,
            created:false

        }
    })
    const cleanArray2 = (array) =>
    array.map(elemento=>{
        return {
            id:elemento.id,
            name:elemento.name,
            height:elemento.height.metric,
            weight:elemento.weight.metric,
            lifeSpan:elemento.lifeSpan,
            temperament:elemento.temperament,
            created:false

        }
    })

const createDog= async (name,image,height,weight,lifeSpan,temperament)=>
 await Dog.create({name,image,height,weight,lifeSpan,temperament})


const getDogByID = async (idRaza, source) => {
    const dog =

        source === "API"
         ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`)) 
            .data
         : (await Dog.findByPk(idRaza));

    return dog;
}

const searchDogByName= async (name) =>{
    //busca en la bdd
            const databaseDogs = await Dog.findAll(
                {
                    where:
                    {
                        name:{[Op.like]:'%'+name+'%'}
                    }
                }
            );
    //busca en la api
     //buscar en api 
     
     const apiDogsRaw= (
        await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    ).data;
    
    const apiDogs=cleanArray2(apiDogsRaw);  
    //filtra por nombre en el array traido de la api
    //const filterDogsApi= apiDogs.filter((dogui)=>dogui.name==name)

    return [...databaseDogs, ...apiDogs];
}

const getAllDogs= async ()=>{
    //buscar en bdd
    const databaseDogs= await Dog.findAll();
    //buscar en api 
    const apiDogsRaw= (
                    await axios.get(URL)
                ).data;
    const apiDogs=cleanArray(apiDogsRaw);                
    //unir
        return [...databaseDogs, ...apiDogs];
    

}

module.exports={createDog,getDogByID,getAllDogs,searchDogByName};