import datas from './data';
import Home from './home';

function Desboard(){
    return(
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
    );
}

export default Desboard;