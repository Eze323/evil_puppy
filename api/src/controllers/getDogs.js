const axios = require('axios');
const router= require('../routes/index');
//const getBreedsByName = require('./getDogsByName');
const URL='https://api.thedogapi.com/v1/breeds?limit=10&page=0';
const URL2='https://api.thedogapi.com/v1/breeds/';
//const URL ="https://rickandmortyapi.com/api/character"


const getDogs =async (req,res)=>{
    try {
        
        const {idRaza,name}=req.query

        if(!idRaza && !name){
                const data= await axios.get(URL);    
                //const result = data.map(({ id, name, image, temperament }) => ({ id, name, image, temperament }));
                const result = data.data;
                console.log(result);
                if(!result) throw new Error('No data');

                return res.status(200).json(result);}
        else if(idRaza && !name){

                const data= await axios.get(URL2+Number(idRaza));    
                const result = data.data;

                if(!result) throw new Error('No existe idRaza');
                res.status(200).send(result);
            }
        else{

            const data= await axios.get(URL2+'search?q='+name);    
            const result = data.data;

            if(!result) throw new Error('No existe nombre de raza');
            res.status(200).send(result.leght);
        }    

        

    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports =getDogs;
