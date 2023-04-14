import React, { useEffect, useState } from 'react';
import './FormCreate.css';
export default function CreateForm(){

  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    async function fetchTemperaments() {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds/');
        const data = await response.json();

        // Obtener temperamentos de cada raza de perro
        const breeds = Object.values(data);
        const allTemperaments = breeds.flatMap(breed => breed.temperament ? breed.temperament.split(", ") : [])
          .filter(temp => temp !== null)
          .reduce((uniqueTemperaments, temp) => {
            if (!uniqueTemperaments.includes(temp)) {
              uniqueTemperaments.push(temp);
            }
            return uniqueTemperaments;
          }, []);

        setTemperaments(allTemperaments);
      } catch (error) {
        console.log('Hubo un problema con la petición Fetch: ' + error.message);
      }
    }

    fetchTemperaments();
  }, []);

  function handleInputChange2(event) {
    // Handle input change here
  }

    // async function getTemperaments() {
    //     try {
    //       const response = await fetch('https://api.thedogapi.com/v1/breeds/');
    //       const data = await response.json();
      
    //       // Obtener temperamentos de cada raza de perro
    //       const breeds = Object.values(data);
    //       const temperaments = breeds.flatMap(breed => breed.temperament ? breed.temperament.split(", ") : [])
    //         .filter(temp => temp !== null)
    //         .reduce((uniqueTemperaments, temp) => {
    //           if (!uniqueTemperaments.includes(temp)) {
    //             uniqueTemperaments.push(temp);
    //           }
    //           return uniqueTemperaments;
    //         }, []);
      
    //       console.log(temperaments); // Mostrar lista de temperamentos en la consola
    //     } catch (error) {
    //       console.log('Hubo un problema con la petición Fetch: ' + error.message);
    //     }
    //   }
     //const temperamentos=getTemperaments();
/*
Nombre.
Altura (diferenciar entre altura mínima y máxima de la raza).
Peso (diferenciar entre peso mínimo y máximo de la raza).
Años de vida.
Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
Botón para crear la nueva raza.

*/
const handleInputChange=(evento)=>{
    //[]: evento.target.value,
    console.log(evento.target.value);
}
const handleSubmit=()=>{
    
    console.log("hace el perro");
}

    return(
        <div>
        <h1>Formulario De Creacion Dogs</h1>

        <div className='FormContent'>
            <form onSubmit={handleSubmit}>
            <div className='name'>
            <label title='breedname'>breed name: </label>
            <input 
            type="text" 
            name='breedname' 
            placeholder='dog breed name'
            onChange={handleInputChange}
            />
            </div>
            <div className='height'>
            <label title='minheight'>height: </label>
            <label title='minheight'>min:</label>
            <input 
            type="number" 
            name='minheight' 
            placeholder='min height'
            onChange={handleInputChange}
            />
            
             <label title='minheight'>max: </label>
            <input 
            type="number" 
            name='maxheight' 
            placeholder='max height'
            onChange={handleInputChange}
            />
            </div>
            <div className='weight'>
            <label title='minweight'>weight: </label>
            <label title='minweight'>min:</label>
            <input 
            type="number" 
            name='minweight' 
            placeholder='min weight'
            onChange={handleInputChange}
            />
            
             <label title='maxweight'>max: </label>
            <input 
            type="number" 
            name='maxheight' 
            placeholder='max height'
            onChange={handleInputChange}
            />
            </div>
            <div className='lifespan'>
            <label title='lifespan'>life span: </label>
            <input 
            type="number" 
            name='lifespan' 
            placeholder='life span'
            onChange={handleInputChange}
            />
            </div>
            <div className='temperaments' >
            <label title='temperaments'>temperaments: </label><br/>
            <div className='classtemperaments'>
            {temperaments.map((temp, index) => (
                <label key={index} className='temp'>
                
                {temp}<input type="checkbox" name={temp} value={temp} onChange={handleInputChange2} />
                
                </label>
                
            ))}
            </div>
            {/* Assertive<input type="checkbox" name="cor" value="friendly"/><br/>
            Energetic<input type="checkbox" name="cor" value="friendly"/><br/>
            Loyal<input type="checkbox" name="cor" value="friendly"/><br/>
            Gentle<input type="checkbox" name="cor" value="friendly"/><br/>
            Independent<input type="checkbox" name="cor" value="friendly"/><br/>
            Happy<input type="checkbox" name="cor" value="friendly"/><br/>
            Confident: <input type="checkbox" name="cor" value="azul"/><br/>
            Dominant: <input type="checkbox" name="cor" value="amarelo"/> <br/>
            Friendly: <input type="checkbox" name="cor" value="vermelho"/> <br/>
            Loving: <input type="checkbox" name="animal" value="coelho"/> <br/>
            Protective: <input type="checkbox" name="animal" value="cachorro"/> <br/>
            Trainable: <input type="checkbox" name="animal" value="gato"/><br/>
            Dutiful:<input type="checkbox" name="animal" value="cachorro"/> <br/>
            Responsible:<input type="checkbox" name="animal" value="cachorro"/> <br/> */}
            </div>


            <input type="submit" value="Create" />

            </form>

        </div>
        </div>
    )


}