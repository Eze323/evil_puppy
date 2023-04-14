import { ADD_DOG,DELETE_DOG,GET_DOGS,GET_TEMPERAMENTS,GET_DOGBYNAME,FILTER,ORDER } from "./actions";

const initialState={
    allDogs:[],
    myDogs:[],
    temperaments:[]
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_DOG:
            const addDog=[...state.allDogs,action.payload];
            return{
                ...state,
                allDogs:[...addDog],
                myDogs:[...addDog]
            }
        case DELETE_DOG:
            const deleteDog=state.allDogs.filter(
                (dog)=>dog.id!==action.payload
            )
            return{
                ...state,
                myDogs:[...deleteDog],
                allDogs:[...deleteDog]
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,

            }       
        case FILTER:
            return {
                ...state,
                myDogs:state.allDogs.filter(e=>e.temperament===action.payload)
            }
        case ORDER:
            let orderDogs;
            if(action.payload==='Ascendente'){
                orderDogs=state.myDogs.sort((a,b)=>a.name>b.name?1:-1);
            }
            else{
                orderDogs=state.myDogs.sort((a,b)=>a.name<b.name?1:-1);
            }
            return{
                ...state,
                myDogs:[...orderDogs]
            }
            case 'RESET':
                return{
                    ...state,
                    myDogs:state.allDogs
                }
            default:
                return {...state}
    }
}

export default rootReducer;