import { useReducer } from "react"


const initialState = 0;
const reducer = (state,action) => {
    
    if(action.type==="increment"){
        return state + 1
    }
    if(action.type === "decrement"){
        return state - 1
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <h3><p>{state}</p></h3>
        <button onClick={()=>{dispatch({type:"increment"})}}>increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>
        </>
    );
}
export default UseReducer

