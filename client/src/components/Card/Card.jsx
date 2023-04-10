import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {addFav,removeFav} from '../../redux/actions';
import {useDispatch, useSelector } from 'react-redux';
import './Card.css';

export function Card(props) {
   const [isFav,setIsFav] = useState(false);
   const dispatch=useDispatch();
   const myFavorites=useSelector(state=>state.myFavorites);


   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [props]);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));

      }else{
         setIsFav(true);
         dispatch(addFav(props))}
         

   }
   

   return (
      <div className='Figurita'>
         <div className='BtnContainer'>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={()=>props.onClose(props.id)}>X</button>
         </div>
         <img className='imageCard'  src={props.image} alt={props.name}/> 
         <Link to={`/detail/${props.id}`}>
               <h2 className='name'>{props.name}</h2>
         </Link>
         <h2 className='specie'>{props.species} - {props.gender}</h2>
         
         
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