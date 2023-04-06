const axios = require('axios');
const router= require('../routes/index');
//const getBreedsByName = require('./getDogsByName');
const URL='https://api.thedogapi.com/v1/breeds?limit=10&page=0';

const getDogs =async (req,res)=>{
    try {
        
        

        
                const data= await axios.get(URL);    
                //const result = data.map(({ id, name, image, temperament }) => ({ id, name, image, temperament }));
                const result = data.data;
                if(!result) throw new Error('No data');

                return res.status(200).json(result);
    
            }catch (error) {
        res.status(404).send(error.message);
    }

}
module.exports = getDogs;
