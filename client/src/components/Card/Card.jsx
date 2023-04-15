import { Link } from 'react-router-dom';
import {useEffect} from 'react';
//import {addDog,deleteDog} from '../../redux/actions';
//import {useDispatch, useSelector } from 'react-redux';
import './Card.css';

export function Card(props) {
   //const [isFav,setIsFav] = useState(false);
  // const dispatch=useDispatch();
  // const myDogs=useSelector(state=>state.myDogs);
  //console.log(props);

   useEffect(() => {
    /*  myDogs?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      );*/
      // eslint-disable-next-line
   }, [props]);

   /*function handleFavorite(){
      
    /*  if(isFav){
         setIsFav(false);
         dispatch(deleteDog(props.id));

      }else{
         setIsFav(true);
         dispatch(addDog(props))}
         

   }*/
   

   return (
      <div className='Figurita'>
         <div className='BtnContainer'>
         {/*
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )*/
         }
         <button onClick={()=>props.onClose(props.id)}>X</button>
         </div>
         <Link to={`/detail/${props.id}`}>
         <div className='imageCard'>
         <img src={props.image} width="250px" alt={props.name}/> 
         </div>
         
               <h2 className='name'>{props.name} : 
         {props.temperament}</h2>
         </Link>
         
         
      </div>
   );
}
export default Card
/*
export const mapStateToProps = state => {
   return {
      myFavorites: state.myfavorites
   }
}
export function mapDispatchToProps(dispatch) {
   return{
      addFav: function (personaje){
         dispatch(addFav(personaje))
      },
      removeFav:function(id){
         dispatch(removeFav(id))
         
      }

   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
*/