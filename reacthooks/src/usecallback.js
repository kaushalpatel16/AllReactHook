import React, { useState, } from "react";
import Fastfunction from "./fastfunction";


const doblenumberfunction = (num) => {
  console.log("calling number");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const Callback = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const changenumber = (e) => {
    setCount(e.target.value);
  }

  const changetheme = () => {
    setDark(prevDark => !prevDark);
  }

  const dblnumber = doblenumberfunction(count);

  const themestyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }

  return (
    <>
      <div>
        <input type="number" onChange={changenumber} placeholder="enter number"></input>
        <button onClick={changetheme}>change theme</button>
        <div style={themestyle}>{dblnumber}</div>
        <h1><p>with usememo</p></h1>
        <Fastfunction />
      </div>
    </>
  );
};



export default Callback;
