import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="m-[300px] p-2 bg-pink-100 justify-center  w-[1200px] rounded-2xl ">
            <h1 className="font-extrabold text-8xl text-orange-400 m-2 p-2 ">Oops!</h1>
            <h2 className="font-extrabold text-8xl text-orange-400 m-2 p-2 ">Something went wrong</h2>
            <h3 className="font-extrabold text-8xl text-orange-400 m-2 p-2 ">{err.statusText}<></>{err.status}</h3>
        </div>
    );
}
export default Error;