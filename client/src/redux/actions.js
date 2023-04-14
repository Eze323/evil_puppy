import axios from 'axios';
export const ADD_DOG='ADD_DOG';
export const DELETE_DOG='DELETE_DOG';
export const GET_DOGS='GET_DOGS';
export const GET_DOGBYNAME='GET_DOGBYNAME';
export const GET_TEMPERAMENTS='GET_TEMPERAMENTS';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


export function addDog(character){
    return{
        type: ADD_DOG,
        payload: character
    }
}

export function deleteDog(id){
    return{
        type: DELETE_DOG,
        payload: id
    }
}

export const getDogs=()=>{
    try {
        return async function (dispatch) {
          const response = await axios.get("http://localhost:3001/dogs");
          return dispatch({
            type: GET_DOGS,
            payload: response.data,
          });
        };
      } catch (err) {
        console.log(err);
      }
}

export function getDogsByName(name){
    return{
        type: GET_DOGBYNAME,
        payload: name
    }
}

export const getTemperaments=()=>{
    try {
      return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/temperaments");
        return dispatch({
          type: GET_TEMPERAMENTS,
          payload: response.data,
        });
      };
    } catch (err) {
      console.log(err);
    }
    
}
