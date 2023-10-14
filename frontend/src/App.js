//import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/footer";
import Login from "./components/login";
import Mainpage from "./components/main";
import Women from "./components/womensection";
import Men from './components/mensection'
import Viewproduct from "./components/viewproduct";
import Signup from "./components/signup";
import Admin from "./components/admin";
import Prodcuts from "./components/products";
import EditProducts from "./components/editproducts";
import UserProfile from "./components/userProfile";
import Cart from "./components/cart";
import Userpfp from "./components/admin";
import Userp from "./components/userProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/main" element={<Mainpage/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/viewproduct/:id" element={<Viewproduct/>}/>
      <Route path="/admin" element={<Userpfp/>}/>
      <Route path="/products" element={<Prodcuts/>}/>
      <Route path="/userpfp/:name" element={<Userp/>}/>
      <Route path="/editproduct/:id" element={<EditProducts/>}/>
      <Route path="/cart" element={<Cart/>}/>

      

     </Routes>
  );
}

export default App;
