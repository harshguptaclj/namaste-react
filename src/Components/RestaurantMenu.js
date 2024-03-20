import { useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = ()=>{

  
    const {resId}= useParams();

    const resInfo= useRestaurantMenu(resId);
    const [showIndex, setShowIndex]= useState(null);

    if(resInfo === null) return <Shimmer/>;

    const name = resInfo?.cards[0]?.card?.card?.info?.name || "Name Not Available";
    const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines || [];
    const costForTwoMessage = resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage || "Cost not available";

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    
    const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index)=>
            <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index===showIndex ? true: false}   
            setShowIndex ={()=> setShowIndex(index)}
            />)}
            
            
        </div>
    );
}
 export default RestaurantMenu;