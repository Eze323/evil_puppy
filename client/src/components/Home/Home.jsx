//import Cards from "../Cards/Cards";

import Cards from "../Cards/Cards";
import "./Home.css";
import React, { useState, useEffect } from "react";

function Home() {
  const [dogBreeds, setDogBreeds] = useState([]);

  async function fetchDogBreeds() {
    try {
      const response = await fetch(
        "https://api.thedogapi.com/v1/breeds?limit=20&page=0"
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
      <p>Estoy logueado y nos encontramos en la home</p>
     
      <Cards characters={dogBreeds}/>
      
    </div>
  );
}

export default Home;