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
            lifeSpan:elemento.life_span,
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
    const cleanArray3 = (array) => {
        return Promise.all(array.map(async (elemento) => {
          const imageUrlJPG = `https://cdn2.thedogapi.com/images/${elemento.reference_image_id}.jpg`;
          const responseJPG = await fetch(imageUrlJPG, { method: 'HEAD' });
          const isJPG = responseJPG.ok;
      
          const imageUrl = isJPG ? imageUrlJPG : `https://cdn2.thedogapi.com/images/${elemento.reference_image_id}.png`;
      
          return {
            id: elemento.id,
            name: elemento.name,
            height: elemento.height.metric,
            weight: elemento.weight.metric,
            image: imageUrl,
            lifeSpan: elemento.life_span,
            temperament: elemento.temperament,
            created: false,
          };
        }));
      };
      


    
const createDog= async (name,image,height,weight,lifeSpan,temperament)=>
 await Dog.create(
    {
        name,
        image,
        height,
        weight,
        lifeSpan,
        temperament
    }
    
    )


const getDogByID = async (idRaza, source) => {
    let dog='';
    
        if(source === "API"){
            let apiDogs=(await axios.get(`https://api.thedogapi.com/v1/breeds/`)).data;
            
            dog= cleanArray(apiDogs.filter(dogui=>dogui.id==idRaza));
            //console.log(filterDogsApi);
            //dog=cleanArray2(filterDogsApi);
        }else{
            dog=(await Dog.findByPk(idRaza));

        }

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
    //const apiDogsRaw=(await axios.get(`https://api.thedogapi.com/v1/breeds/`)).data;
            
    const apiDogs=await cleanArray3(apiDogsRaw);

    
    //const apiDogs=cleanArray2(apiDogsRaw); 
   // console.log(apiDogs); 
    //filtra por nombre en el array traido de la api
    //const filterDogsApi= apiDogs.filter((dogui)=>dogui.name==name)

    return [...databaseDogs,...apiDogs];
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