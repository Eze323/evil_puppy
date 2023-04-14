import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Detail.css';

export default function Detail() {

  const navigate = useNavigate();
  

  function handleBack() {
    navigate("/home");
  }

  const { id } = useParams();
  console.log(id);
  const [dogBreeds, setDogBreeds] = useState({
      name:'',
      weight:'',
      height:'',
      temperament:'',
      image:'',
  });

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
      .then((response) => response.json())
      .then((char)=>{
      //if (char.name) {
        setDogBreeds(char);
      //} else {
      /*  window.alert("No hay personajes con ese ID");
      }*/
    })
    .catch((err) => {
       // console.log(err);
     // window.alert("No hay personajes con ese ID");
    });
  return ()=> setDogBreeds({});
}, [id]);

return (
  
  <div className="ContainerDetail">
    {console.log(dogBreeds,setDogBreeds)}
     
    <div className="ContainerCharacteristics">
      <h2>Name: {dogBreeds.name}</h2>
      <h5 className="zoom">bred for: {dogBreeds.bred_for}</h5> 
      <h5>bred group: {dogBreeds.breed_group}</h5> 
      <h5>Temperaments: {dogBreeds.temperament}</h5> 
      <h5>Height: {dogBreeds.height.metric}</h5>  
      <h5>Weight: {dogBreeds.weight.metric}</h5>
      <h5>Life span: {dogBreeds.life_span}</h5>
      <h5>Origin: {dogBreeds.origin}</h5> 
    </div>
    <div className="ContainerImage">
      <img className="imageCard" src={`https://cdn2.thedogapi.com/images/${dogBreeds.reference_image_id}.jpg`} alt={dogBreeds.name} />
    </div>
    <div>
      <button className="btnClose btn btn1" onClick={handleBack}>Back Home</button>
    </div>
  </div>
);
}
