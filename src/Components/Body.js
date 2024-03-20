import { useEffect, useState , useContext} from "react";
import reslist from "../Utils/mockdata";
import ResteurantCard, {withPromotedLabel} from "./ResteurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";


const Body =() =>{
    const [listOfResteurants,setlistOfResteurants]= useState([])
    const [filteredRestaurant,setfilteredRestaurant]= useState([]);
    const[searchText, setSearchText]=useState("");

    const ResteurantCardPromoted = withPromotedLabel(ResteurantCard);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //
        if (
            json &&
            json.data &&
            json.data.cards &&
            json.data.cards.length > 1 &&
            json.data.cards[1].card.card.gridElements &&
            json.data.cards[1].card.card.gridElements.infoWithStyle &&
            json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        ) {
            // Update state only if all properties are available
            setlistOfResteurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setfilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        } else {
            // Handle the case where the necessary properties are not available
            console.error("Required properties not found in the response.");
        }
        }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    {
        return <div className="m-[300px] p-2 bg-pink-100 justify-center  w-[1200px] h-[300px] rounded-2xl ">
        <h1 className="font-extrabold text-8xl text-orange-400 m-2 p-2">Looks like you are offline!</h1></div>
    }    

    const{loggedInUser,setUserName}= useContext(UserContext);
   
    return listOfResteurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex items-center justify-center">
            <div className="m-4 p-4">
                <input 
                    type="text" 
                    className="border border-solid border-black w-[600px] h-[37px] rounded-md m-4 p-4" 
                    value={searchText} 
                    placeholder="Search Your Favorite Restaurant"
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button className="px-4 py-2 m-2 bg-green-200 rounded-lg"
                    onClick={()=>{   
                        const FilteredRestaurant= listOfResteurants.filter((res)=>      
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())      
                        );   
                        setfilteredRestaurant(FilteredRestaurant)   
                    }}
                    >Search</button>
            </div>
            <div className="m-4 p-4">
            <button className="px-4 py-2 bg-blue-200 rounded-lg"
                onClick={
                    ()=>{
                        const filteredList=filteredRestaurant.filter(
                            (res)=> res.info.avgRating>4.4
                        );
                        setfilteredRestaurant(filteredList)
                    }
                }       
                >
                Top Rated Resteurant</button>
            </div>
            <div className="m-4 p-4">
                <label className="font-bold text-orange-500" >User Name : </label>
                <input 
                    className="border border-solid border-black w-[200px] h-[37px] rounded-md m-4 p-4" 
                    onChange={(e)=>setUserName(e.target.value)}
                    value={loggedInUser}
                ></input>
            </div>
            </div>
            <div className="flex flex-wrap ml-[90px] ">
                { filteredRestaurant?.map((resteurant)=>(
                  <Link 
                    key={resteurant.info.id} 
                    to={"/restaurants/"+resteurant.info.id}>

                {resteurant.info.isOpen?<ResteurantCardPromoted resdata={resteurant}/>:<ResteurantCard resdata={resteurant}/>}
                  
                    
                    
                  </Link>
                ))}
            </div>

        </div>
    );
};

export default Body;