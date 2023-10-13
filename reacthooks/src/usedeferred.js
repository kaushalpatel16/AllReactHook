import { useState } from "react";
import WithUseDeferredfrom from "./UseDeferredcomp";

const UseDeferred = () => {
    const [setitem, setsetitem] = useState("");
    const [list, setlist] = useState([]);

    const style = {
        paddingLeft: "20%",
    }

    const setitems = (e) => {
        setsetitem(e.target.value);
        const array=[];
        for(let i=0;i<20000;i++){
            array.push(e.target.value)
        }
        setlist(array)
    }
    return (
        <>
        <div style={style} className="row">
        <div className="col">
        <h3>without UseDeferred</h3>
        <input type="text" value={setitem} onChange={setitems}/>
        {list.map((val)=>{
                 return <div>{val}</div>
            })
        }
        </div>
        <div className="col">
        <h3> with UseDeferred</h3>
        <WithUseDeferredfrom/>
        </div>

        </div>
        </>
    );
}



export default UseDeferred;