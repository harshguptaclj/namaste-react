const ResteurantCard = (props) =>{
    const {resdata}= props;
   
    // console.log(props);
    const {name,cuisines,avgRatingString,sla,costForTwo,isOpen}= resdata?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 h-[550px] rounded-md  hover:bg-gray-200 ">
        <img
            className="res-logo rounded-md w-[400px] h-[228px] "
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+resdata.info.cloudinaryImageId}
        />
            <h3 className="font-bold py-4 text-2xl text-blue-500">{name}</h3>
            <h4 className="font-bold  text-base text-orange-400">{cuisines.join(", ")}</h4>
            <h4 className="font-bold  text-base text-orange-400">{avgRatingString}</h4>
            <h4 className="font-bold  text-base text-orange-400">{sla.slaString}</h4>
            <h4 className="font-bold  text-base text-orange-400">{costForTwo}</h4>
            <h4 className="font-bold  text-base text-orange-400">{isOpen?"Opened":"Closed"}</h4>
        </div>
    );
};

export const withPromotedLabel =(ResteurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-blue-500 text-white ml-6 mt-2 p-2 rounded-lg">
                    Promoted
                </label>
                <ResteurantCard {...props}/>
            </div>
        );
    }
};

export default ResteurantCard;