const axios = require('axios');
const router= require('../routes/index');
const URL2='https://api.thedogapi.com/v1/breeds/';


const getDogsByID= async (req,res)=>{

    const {idRaza}=req.query

const data= await axios.get(URL2+Number(idRaza));    
const result = data.data;

if(!result) throw new Error('No existe idRaza');

res.status(200).send(result);


}

