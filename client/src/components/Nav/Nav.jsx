//import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav(props) {

    // const {onSearch}=props;

    return (
        <>
        <div className="nav">
        <input type="checkbox"/>
    <span></span>
    <span></span>
    <div className="menu">
      <li><Link to="/home">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/dogs">dogs</Link></li>
      
    </div>
    </div>

                {/* <ul class="nav">
                    <li>
                        <Link to='/home'>
                            <i className="fas fa-home fa-3x home">
                                <div className="circle"></div>
                            </i>
                            <div className="title">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/FormCreate'>
                            <i class="fab fa-twitter fa-3x twitter">
                                <div class="circle"></div>
                            </i>
                            <div class="title">Form</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <i class="fab fa-codepen fa-3x codepen">
                                <div class="circle"></div></i>
                            <div class="title">About</div>

                        </Link>
                    </li>
                    <li>
                        <i class="fab fa-github fa-3x github">
                            <div class="circle"></div></i>
                        <div class="title"><SearchBar /></div>

                    </li>

                    <div class="background"></div>

                </ul> */}






        </>
    )




}