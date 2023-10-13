import React, { useState } from 'react';



 function AddCount (){
 
    const [count, setcount] = useState(1)
    const changenumber =()=>{
       setcount(count+1)
    }  
   

   
   return(
    <>
     <h1> {count}</h1>
    <button onClick={changenumber}>add</button>
    
    </>
   );


}

export default AddCount;





