import { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {


   const [character,setCharacter]=useState('');

   const handleChange = (e)=>{
      setCharacter(e.target.value);
   }

   return (
      <div className="ContentSearchBar">
         <input
               type='text'
               placeholder="Buscar Personaje ..."
               onChange={handleChange}
         />
      <button onClick={()=>onSearch(character)}>
        Buscar

      </button>
      </div>
   );
}

