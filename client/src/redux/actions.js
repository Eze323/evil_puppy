export const ADD_DOG='ADD_DOG';
export const DELETE_DOG='DELETE_DOG';
export const GET_DOGS='GET_DOGS';
export const GET_DOGBYNAME='GET_DOGBYNAME';
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

export function getDogs(){
    return{
        type: GET_DOGS,
        payload: true
    }
}

export function getDogsByName(name){
    return{
        type: GET_DOGBYNAME,
        payload: name
    }
}