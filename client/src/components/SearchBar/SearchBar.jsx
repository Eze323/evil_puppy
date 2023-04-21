import { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";
import { useEffect } from "react";
const URLimage='https://cdn2.thedogapi.com/images/';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [dogBreeds, setDogBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    dispatch(getDogsByName(searchTerm)).then((result) => {
      setDogBreeds(result);
      console.log(result);
    });
  };

  useEffect(() => {}, [searchTerm]);

  return (
    <div className="ContentSearchBar">
      <input
        type="text"
        placeholder="Buscar Personaje ..."
        onChange={handleSearch}
      />
      <button onClick={handleSearchButtonClick}>Buscar</button>
    </div>
  );
}
