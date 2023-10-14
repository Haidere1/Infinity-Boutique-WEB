 import vodd from '../videos/vodd.mp4'
import '../styles/login.css'
import { createContext, useEffect, useRef, useState } from 'react';
import {gapi} from 'gapi-script';
// import User from './user';
import { Link, useNavigate } from 'react-router-dom';
import GLogin from './glogin';
import Glogout from './glogout';
import { userLogin } from '../Service/api';
const clientId="870965457539-0t166qbqegtfdgqrv7hpj12jll0tp0qp.apps.googleusercontent.com";
export const Appcontext= createContext(null);
const Login = (e) => {

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        };
        gapi.load('client:auth2',start)
    });
    const navigate=useNavigate();
    const navigation=()=>
    {
        navigate("/main")
    }

    
    const [userData,setUserData]=useState(
        {
            
            
            userName:"",
            password:"",
            

        })

   const {userName, password} = userData;

    const handleChange=(e)=>{
        console.log("Input Changed")
        setUserData({...userData, [e.target.name]: [e.target.value]})

    }

    const userCheck=async()=>{

        await userLogin(userData)
        
          
        
        
    }

    return(

        <div style={{fontFamily:"Quesha"}}>
            
    <div className="menu">
       
        <video src={vodd} autoPlay muted loop playsInline className='img'></video>
        
    </div>
    <div className="login glow">
        <h1>Welcome To The Infinity Realm</h1>
    </div>
    <div className="input glass">
        
        <table>
            <tr><td>
        <label><b> Username</b></label>
    </td>
        <td>
        <input value={userName} onChange={(e)=>handleChange(e)} 
        className='inpt' type="text" name="userName" id=""/>
    </td>
    </tr>

        
    
    <tr>
     <td>
    <label><b> Password </b></label>
    </td>
    <td>
        <input value={password} onChange={(e)=>handleChange(e)} className='inpt' type="password" name="password" id=""/>
    </td>
    </tr>
    </table>
    <Link to={`/main/${userName} `}>  <button onClick={userCheck} className="btn1">Login</button></Link>
    <p style={{fontSize: 20, marginTop:"4vh"}}><b> Dont have an account?</b></p>
   <Link to='/signup'><button  className="btn1" onClick={onclick}>Signup</button></Link>
   <div style={{marginTop:"100px"}}>
   <GLogin/>
   
   {/* <Glogout/> */}

   </div>
   
{/* <div style={{marginTop:"20px"}}>
<Appcontext.Provider value={{username}}>
     <User/>
</Appcontext.Provider>
</div> */}
     
    </div>
    



   

        </div>
    )
     
};
export default Login;
