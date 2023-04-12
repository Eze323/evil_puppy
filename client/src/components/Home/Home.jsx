//import Cards from "../Cards/Cards";

import "./Home.css";
import React, { useState, useEffect } from "react";

function Home() {
  const [dogBreeds, setDogBreeds] = useState([]);

  async function fetchDogBreeds() {
    try {
      const response = await fetch(
        "https://api.thedogapi.com/v1/breeds?limit=10&page=0"
      );
      const data = await response.json();
      setDogBreeds(data);
    } catch (error) {
      console.log("Hubo un problema con la petición Fetch: " + error.message);
    }
  }

  useEffect(() => {
    fetchDogBreeds();
  }, []);

  return (
    <div className="Home">
      <h1>Home Page</h1>
      <p>Estoy en el logueado</p>
      <ul>
        {dogBreeds.map((breed) => (
          <li key={breed.id}>
            <h3>{breed.name}</h3>
            <img src={breed.image.url} width='250px'/>
            <p>{breed.temperament}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;