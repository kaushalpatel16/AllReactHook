import { useState } from "react";
import ImageControll from "./imagecontroller";


const Search=()=>{
    const [img, setimg] = useState("")

    const searchimg=(e)=>{
         setimg(e.target.value);
    }
  return(
      <>
      <div>
      <input type="text" onChange={searchimg} placeholder="search img"></input>
      </div>

      <ImageControll/>
      </>
  );
}

export default Search;