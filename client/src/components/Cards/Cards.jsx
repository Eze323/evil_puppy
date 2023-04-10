import Card from '../Card/Card';
const URL = 'https://api.thedogapi.com/v1/breeds/';

export default function Cards(props) {

    function cargaDogs(){

            fetch(URL)
            .then(response =>response.json())
    }

   const { characters } = props;
   let i=0;
   
   if(characters.length===0){
      return <h1>No hay Personajes disponibles</h1>
   }else{
      return (
         <div className='ContieneTarjeta' >   
           <div className='ContieneFiguritas'>
              
              {characters.map((character)=>(
                 <Card
                    onClose={props.onClose}
                    key={i++}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    id={character.id}
                 />
              )
              
                 
              )}
                   
        
           </div>  
         </div>
           );
   }
   
}
