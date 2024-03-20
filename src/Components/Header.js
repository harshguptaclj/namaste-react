import {LOGO_URL} from "../Utils/constant"
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";


const Header =()=>{
    const [btnName,setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();

    const {loggedInUser}= useContext(UserContext);

//subscring to the store using a selector

    const cartItems= useSelector((store)=>store.cart.items);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <Link to="/"><img 
                    className="w-56 m-4 p-4"
                    src={LOGO_URL}
                /></Link>
            </div>
            <div className=" flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="font-bold text-xl text-orange-500 px-4 ">
                        {onlineStatus?<h1>🟢 Online </h1>:<h1>🔴 Offline </h1>}
                    </li>
                    <li className="font-bold text-xl text-orange-500 px-4 ">
                    <Link to="/">Home</Link></li>
                    <li className="font-bold text-xl text-orange-500 px-4 ">
                    <Link to="/about">About Us</Link></li>
                    <li className="font-bold text-xl text-orange-500 px-4 ">
                    <Link to="/contactUs">Contact Us</Link></li>
                    <li className="font-bold text-xl text-orange-500 px-4 ">
                    <Link to="/grocery">Grocery</Link></li>
                    <li className="font-bold text-xl text-orange-500 px-4 " >
                    <Link to="/cart">Cart ({cartItems.length} items)</Link> </li>
                    <button 
                        className="font-bold text-xl text-orange-500 px-4 "
                        onClick={()=>{
                            btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                            }}
                    >
                    {btnName}
                    </button>
                    <li className="font-bold text-xl text-orange-500 px-4 ">{loggedInUser} </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;