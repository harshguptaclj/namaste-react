import React from "react";
import { useState } from "react";


class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
       // console.log("Child Constructor");
       this.state = {
            userInfo : {
                name : "Dummy Name",
                location: "Dummy Location",
            },
        };
    }
    
    async componentDidMount()
    {
       // console.log("Child Component Did Mount");
       const data = await fetch("https://api.github.com/users/harshguptaclj");
       const json = await data.json();
       //console.log(json);
       this.setState({
        userInfo: json,
       });
    }
    render(){
       // console.log("Child Render"); 
        const {name,location,avatar_url}= this.state.userInfo;
        return(
            <div className="user-card m-4 p-4">
                <img src={avatar_url} className="rounded-xl w-56 mb-2"></img>
                <h2 className="text-xl font-bold text-orange-500 ">Name : {name}</h2>
                <h3 className="text-xl font-bold text-orange-500">Location : {location}</h3>
                <h3 className="text-xl font-bold text-orange-500">Contact : 7080127050</h3> 
            </div>
            );
             
    }

}

export default UserClass;