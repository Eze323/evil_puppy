import "./LandingPage.css";
import { useNavigate } from "react-router-dom";



function LandingPage() {
  // eslint-disable-next
  const navigate= useNavigate();
  function handleHome(){
    navigate("/home");
  }
    return (
      <div className="LandingPage">
        <h1>Bienvenido a Evil Puppy</h1>
        
        <div class="middle">
        <button className="btn btn1" onClick={handleHome}> Ingresar a la Home</button>
        </div>
      </div>
    );
  }
  
  export default LandingPage;