import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart =()=>{

    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }
    const handleRemoveItem =()=>{
        dispatch(removeItem());
    }
    //Note: Subscribe only the required data
    const cartItems = useSelector((store)=>store.cart.items);
    return <div className="text-center m-4 p-4">
    <h1 className="text-4xl mb-3 text-orange-500 font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-orange-400 rounded-lg text-white" onClick={
            handleClearCart}>Clear Cart</button>
        <button className="p-2 m-2 bg-orange-400 rounded-lg text-white" onClick={
            handleRemoveItem}>Remove Item</button>    
        {cartItems.length===0 && <h1 className="text-xl mb-3 text-orange-500 font-bold">Cart is Empty Add Items to the Cart!</h1>}    
        <Itemlist items={cartItems}></Itemlist>
    </div>
    </div> 
};
export default Cart;