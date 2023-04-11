import "./LandingPage.css";
import { useNavigate } from "react-router-dom";



function LandingPage(props) {
  const login = props.login;
    // eslint-disable-next
  const navigate= useNavigate();

  function handleHome(){
    login();
    //setAccess(true);
    navigate("/home");
  }
    return (
      <div className="LandingPage">
        <h1>Welcome to Evil Puppy</h1>
        
        <div class="middle">
        <button className="btn btn1" onClick={handleHome}>Enter Home</button>
        </div>
      </div>
    );
  }
  
  export default LandingPage;