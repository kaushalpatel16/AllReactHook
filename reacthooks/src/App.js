
import { BrowserRouter, Routes, Route } from "react-router-dom"; 


import AddCount from './count';
import Currenttime from './currenttime';
// import Header from './header';
import House from "./house";
import Desboard from "./desboard";
import Layout from "./Layout";
import Search from "./search";
import Error from "./error";
import Hoc from "./hoc";
import Location from "./location";
import Callback from "./usecallback";
import MyComponent from "./customhook";
import UseTransition from "./usetransition";
import UseDeferred from "./usedeferred";
import UseRef from "./userefhook";
import UseReducer from "./usereducer";



// Assume your context is defined like this

 
function App() {


 return (
  <>




    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<House />} />
          <Route path="CountPage" element={<AddCount />} />
          <Route path="CurrenTtime" element={<Currenttime />} />
          <Route path="Data" element={<Desboard />} />
          <Route path="Search" element={<Search/>}/>
          <Route path="Hoc" element={<Hoc cmp={AddCount}/>} />
          <Route path="location/:name" element={<Location/>}/>
          <Route path="callback" element={<Callback/>}/>
          <Route path="costom" element={<MyComponent/>}/>
          <Route path="usetransition" element={<UseTransition/>}/>
          <Route path="UseDeferred" element={<UseDeferred/>}/>
          <Route path="useref" element={<UseRef/>}/>
          <Route path="usereducer" element={<UseReducer/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>

 
   

  
  );
}

export default App;
