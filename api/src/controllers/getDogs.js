const axios = require('axios');
const router= require('../routes/index');
const URL='https://api.thedogapi.com/v1/breeds?limit=10&page=0';



const getDogs =async (req,res)=>{
    try {
        const {data}= await axios.get(URL);    
        const result = data.map(({ id, name, image, temperament }) => ({ id, name, image, temperament }));

        if(!result) throw new Error('No data');
        return {result}
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports =getDogs;
