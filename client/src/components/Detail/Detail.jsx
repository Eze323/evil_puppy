import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detail() {

  const navigate = useNavigate();
  

  function handleBack() {
    navigate("/home");
  }

  const { detailId } = useParams();
  const [character, setCharacter] = useState({
      name:'',
      temperament:'',
      image:''

  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char)=>{
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
        console.log(err);
      window.alert("No hay personajes con ese ID");
    });
  return ()=> setCharacter({});
}, [detailId]);

return (
  <div className="ContainerDetail">
    <div className="ContainerCharacteristics">
      <h2>Nombre: {character.name}</h2>
      <h5>Status: {character.status}</h5>
      <h5>Especie: {character.species}</h5>
      <h5>Genero: {character.gender}</h5>
      <h5>Origin: {character.origin.name}</h5>
    </div>
    <div className="ContainerImage">
      <img className="imageCard" src={character.image} alt={character.name} />
    </div>
    <div>
      <button onClick={handleBack}>Home</button>
    </div>
  </div>
);
}
