import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
    <h2> Top dishes near to you </h2>
     <div className='food-display-list'>
     {food_list.map((item,index)=>{
       {console.log(category,item.category);}
       if(category==="All" || category===item.category){ // filter the food item according to the category..
        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
       }
     })}
     </div>
    </div>
  )
}

export default FoodDisplay;
