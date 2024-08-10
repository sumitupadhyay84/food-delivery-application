import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

   // const [itemCount,setItemCount]=useState(0); //not use it because for each item having one state then it is not a good practice so use the context api.. 
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext); // get the access of cartitem,add to Cart,remove from Cart from context..

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt=''/>
            {!cartItems[id]
             ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/> // if it is zero or itemcount===0;
             :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/> 
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                </div> // if itemcount > 0 
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem;
