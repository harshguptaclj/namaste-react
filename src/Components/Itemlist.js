import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { addItem } from "../Utils/cartSlice";
const Itemlist=({items})=>{

    const dispatch = useDispatch();
    const handleAddItem=(item)=>{
        //Dispatch an action
        dispatch(addItem(item))
    }
    return(
    <div>
       {items.map((item)=>
        (<div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
                <div className="py-2">
                <span className="text-xl font-bold">{item.card.info.name}</span>
                <span className="text-lg"> - ₹ {item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-lg">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
                <div className="absolute">
                <button className="p-2 mx-20 my-[126px] rounded-lg bg-pink-100 shadow-lg text-pink-400"
                 onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                <img src={CDN_URL+ item.card.info.imageId} className="p-2 w-full h-40" alt="Image not available"></img>
            </div>
        </div>)
       ) }
    </div>)
}
export default Itemlist;