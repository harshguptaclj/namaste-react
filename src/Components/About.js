import UserContext from "../Utils/UserContext";
import User from "./User"
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props)
    {
        super(props);
       // console.log("Parent Constructor");
    }
    componentDidMount()
    {
       // console.log("Parent Component Did Mount");
    }
    render(){
       // console.log("Parent Render");
        return(
            <div>
                <h1 className="m-4  text-xl font-bold text-orange-500">About Us</h1>
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className="m-4  text-xl font-bold text-orange-500"> LoggedIn User: {loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                <UserClass name={"Harsh Class"}/>
            </div>
           
        );
        
    }       
}

export default About;