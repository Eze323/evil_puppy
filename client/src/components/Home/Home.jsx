
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getDogsByName} from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import { Paginado } from "../Paginado/Paginado";
function Home() {
  //const [dogBreeds, setDogBreeds] = useState([]);

  const dogBreeds = useSelector((state) => state.dogBreeds);
  const dispatch = useDispatch();
  
  
  // eslint-disable-next-line
  const [numPage, setNumPage] = useState(20);
  // eslint-disable-next-line
  const [indexPage, setIndexPage] = useState(1);
  
  const paginaInicio=(indexPage-1)*numPage;
  const paginaEnd=paginaInicio+numPage;
  const dogSlice=dogBreeds.slice(paginaInicio, paginaEnd);
  
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch,indexPage]);

  return (
    <div className="Home">
      <h1>Home Page</h1>
      <p>Estoy logueado y nos encontramos en la home</p>
      <SearchBar/>
     
      <Paginado paginado={setIndexPage} indexPage={indexPage}  />
      <Cards dogBreeds={dogSlice}/>
    </div>
  );
}

export default Home;