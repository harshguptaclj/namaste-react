import { useState } from "react";


const User = ({name})=>{
    const [count]= useState(4);
    return(
    <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : Patna</h3>
        <h3>Contact : 7080127050</h3>
    </div>
    );
}

export default User;