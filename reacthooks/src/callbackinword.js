// import { memo } from "react";


const Fromcallback = ({item}) => {
    console.log("Fromcallback rendered with item:", item+1 )
    return <div>Item: {item}</div>;
}
export default Fromcallback;
