import { useState } from "react";
import List from "./deferredlist";

const WithUseDeferredfrom = () => {
    

    const [setitem, setsetitem] = useState("");
     
    const setitems = (e) => {
        setsetitem(e.target.value);   
    }
    return (
        <>
        <input type="text" value={setitem} onChange={setitems}/>
        <List input={setitem}/>

        </>
    );
}

export default WithUseDeferredfrom;