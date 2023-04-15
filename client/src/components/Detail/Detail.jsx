import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Detail.css';

export default function Detail() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [dogBreeds, setDogBreeds] = useState({
    name:'',
    weight:'',
    height:'',
    temperament:'',
    image:'',
    lifeSpan:''
  });

  useEffect(() => {
    fetch(`http://localhost:3001/dogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setDogBreeds(data[0]);
        } else {
          window.alert("No hay perros con ese ID");
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("No hay perros con ese ID");
        navigate("/home");
      });
  }, [id, navigate]);

  return (
    <div className="ContainerDetail">
      <div className="ContainerCharacteristics">
        <h2>Name: {dogBreeds.name}</h2>
        <h5>Temperaments: {dogBreeds.temperament}</h5>
        <h5>Height: {dogBreeds.height}</h5>
        <h5>Weight: {dogBreeds.weight}</h5>
        <h5>Life span: {dogBreeds.lifeSpan}</h5> 
      </div>
      <div className="ContainerImage">
        <img className="imageCard" src={`${dogBreeds.image}`} alt={dogBreeds.name} />
      </div>
      <div>
        <button className="btnClose btn btn1" onClick={() => navigate("/home")}>Back Home</button>
      </div>
    </div>
  );
}
