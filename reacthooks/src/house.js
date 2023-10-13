
import { useState } from 'react';

import AddCount from './count';
import Currenttime from './currenttime';
import datas from './data';

import Home from './home';



function House() {

 const [color, setcolor] = useState("red");
 const [colorchange, setcolorchange] = useState("")

 const addcolor=(e)=>{
     setcolorchange(e.target.value);
 }

 const changecolor=()=>{
     setcolor(colorchange);
 }
 return (
  <>
  <div style={{backgroundColor:color}}>
  


  


 {/* increse number  */}
    <div>
     <AddCount></AddCount>
    </div>



 {/* current time */}
    <div>
      <Currenttime/>
    </div>

    {/* value of object */}
    <div>
   {
    datas.map((val)=>{
      return (
        <Home 
        name={val.name}
        age={val.age} />
      )
    })
   }
   </div>
 

 {/* change background color */}
   <div>
   <h1>Change BackgroundColor </h1>
    <input onChange={addcolor}></input>
    <button onClick={changecolor}>changecolor</button>
    </div>
   </div>
   
 </>
  
  );
}

export default House;
