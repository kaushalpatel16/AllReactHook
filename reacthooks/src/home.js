import React, { useState } from "react";

function Home(props){
   
   const [name, setname] = useState(props.name);
  
   const[newname,setnewname]=useState("");

   const changename =(e)=>{
       setnewname(e.target.value)
   }
   const change =()=>{
       setname(newname)
   }

    return(
        <>
        <div>
            <h1>{name}</h1>
            <h3>{props.age}</h3>
        </div>
        <div>
            <input type="text" onChange={changename}></input>
            <button onClick={change}>change name</button>
        </div>

        </>
    )
}

export default Home;