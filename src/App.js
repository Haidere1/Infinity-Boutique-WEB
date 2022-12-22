//import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/footer";
import Login from "./components/login";
import Mainpage from "./components/main";
import Women from "./components/womensection";
import Men from './components/mensection'
import Viewproduct from "./components/viewproduct";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/main" element={<Mainpage/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/viewproduct" element={<Viewproduct/>}/>
      

     </Routes>
  );
}

export default App;
