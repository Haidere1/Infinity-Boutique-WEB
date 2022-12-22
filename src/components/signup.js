import vodd from '../videos/background.mp4'
import '../styles/login.css'
import { createContext, useEffect, useRef, useState } from 'react';
// import User from './user';
import { Link} from 'react-router-dom';
export const Appcontext= createContext(null);
const Signup = (e) => {


    const [username,setUsername]=useState("");


    useEffect(()=>{
        console.log("Component Did Update")
        },[username]);
    
    const InputRef=useRef(null);
    const onclick=()=>
    {
        InputRef.current.focus();
        InputRef.current.style.color="red";
        
    }
    // const navigate=useNavigate();
    // const navigation=()=>
    // {
    //     navigate("/main")
    // }
    return(

        <div style={{fontFamily:"Quesha"}}>
            
    <div className="menu">
       
        <video src={vodd} autoPlay muted loop playsInline className='img'></video>
        
    </div>
    <div className="login">
        <h1>Unlock Infinite Realms With Infinity</h1>
    </div>
    <div className="input glass">
        
        <table>
        <tr>
     <td>
    <label><b> Email: </b></label>
    </td>
    <td>
        <input className='inpt' type="email" name="" id=""/>
    </td>
    </tr>


            <tr><td>
        <label><b>Username</b></label>
    </td>
        <td>
        <input onChange={(event)=>{setUsername(event.currentTarget.value)}} 
        className='inpt' type="text" name="" id="" ref={InputRef}/>
    </td>
    </tr>

        
    
    <tr>
     <td>
    <label><b> Password </b></label>
    </td>
    <td>
        <input className='inpt' type="password" name="" id=""/>
    </td>
    </tr>
    </table>
     <Link to='/main'><button  className="btn1" onClick={onclick}>Signup</button></Link>

{/* <div style={{marginTop:"20px"}}>
<Appcontext.Provider value={{username}}>
     <User/>
</Appcontext.Provider>
</div> */}
     
    </div>


   

        </div>
    )
     
};
export default Signup;
