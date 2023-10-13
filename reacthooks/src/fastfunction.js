import React, { useState, useMemo,memo } from "react";


  const doblenumberfunction = (num) => {
    console.log("calling number");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  
  const Fastfunction = memo(() => {
      console.log("kbfkqbfknqjkfnlnfkjl")
    const [count1, setCount1] = useState(0);
    const [dark1, setDark1] = useState(false);
  
    const changenumber1 = (e) => {
      setCount1(e.target.value);
    }
  
    const changetheme1 = () => {
      setDark1(prevDark => !prevDark);
    }
  
    const dblnumber = useMemo(() => {
      return doblenumberfunction(count1);
    }, [count1]);
  
    const themestyle1 = {
      backgroundColor: dark1 ? 'black' : 'white',
      color: dark1 ? 'white' : 'black',
    }
  
    return (
      <>
        <div>
          <input type="number" onChange={changenumber1} placeholder="enter number"></input>
          <button onClick={changetheme1}>change theme</button>
          <div style={themestyle1}>{dblnumber}</div>
        </div>
      </>
    );
  });


  export default Fastfunction;