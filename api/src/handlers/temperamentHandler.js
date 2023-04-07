const {getAllTemperament}= require('../controllers/temperamentController');

const getTemperamentHandler = async (req, res) => {
    
    const result = await getAllTemperament();

    res.status(200).send(result);
};

module.exports = {getTemperamentHandler};