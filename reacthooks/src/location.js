import { useLocation, useParams } from "react-router-dom";



const Location = ()=>{
    const location =useLocation();
    let {name}=useParams();
    return(
        <div>
            <h1> your location is  </h1>
            <h3> ==== {location.pathname} ====</h3>

            <h1> your name from param is  </h1>
            <h3> ==== {name} ====</h3>
        </div>
    );
}
export default Location;