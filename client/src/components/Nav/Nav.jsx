import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav(props){

   // const {onSearch}=props;

    return(
        <>
            <div className="ContentNav">
            <Link to='/home'>Home</Link>
            <Link to='/FormCreate'>Form</Link>
            <Link to='/about'>About</Link>
            <SearchBar/>
            </div>
        </>
    )




}