import { useState, useTransition } from "react";

const WithUseTransitions = () => {
    
    const [isPending, startTransition] = useTransition();
    const [setitem, setsetitem] = useState("");
    const [list, setlist] = useState([]); 


    const setitems = (e) => {
        setsetitem(e.target.value);
        startTransition(()=>{
        const array=[];
        for(let i=0;i<20000;i++){
            array.push(e.target.value)
        }
        setlist(array)
        })
        
    }
    return (
        <>
        <input type="text" value={setitem} onChange={setitems}/>
        {isPending ? "loding..." :  list.map((val)=>{
                 return <div>{val}</div>
            })
        }

        </>
    );
}

export default WithUseTransitions;