const axios = require('axios');
const {Temperament} = require("../db");
const URL = 'https://api.thedogapi.com/v1/breeds/';



const getAllTemperament = async () => {
  const temperamentApiRaw = (
    await axios.get(URL)
  ).data;

  const temperaments = temperamentApiRaw.reduce((acc, curr) => {
    const currTemperaments = curr.temperament ? curr.temperament.split(', ') : [];
    return acc.concat(currTemperaments);
  }, []);

  const uniqueTemperaments = [...new Set(temperaments)];

  const createdTemperaments = await Promise.all(
    uniqueTemperaments.map((name) =>
      Temperament.create({ name })
        .then((temperament) => temperament.toJSON())
        .catch((err) => console.log(`Error al crear el temperamento ${name}: ${err}`))
    )
  );

  return createdTemperaments;
};

module.exports = { getAllTemperament };