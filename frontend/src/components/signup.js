import vodd from '../videos/background.mp4'
import '../styles/login.css'
import { createContext, useState } from 'react';

import { Link} from 'react-router-dom';
import { userAdd } from '../Service/api';
import FileBase64 from 'react-file-base64'
export const Appcontext= createContext(null);
const Signup = (e) => {
    

    const [userData,setUserData]=useState(
        {
            
            email:"",
            userName:"Haider",
            Password:"",
            userImage:"",
            contact:0

        })

   const {  email, userName, Password,userImage, contact} = userData;

    const handleChange=(e)=>{
        console.log("Input Changed")
        setUserData({...userData, [e.target.name]: [e.target.value]})

    }
    const userAddition= async (e)=>{
        e.preventDefault(); 
        await userAdd(userData);
        
        window.alert("Sign Up Successful")
        
        
    }
  
    return(
        <form>
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
        <input onChange={(e)=>handleChange(e)} className='inpt' type="email" name="email" id=""/>
    </td>
    </tr>


            <tr><td>
        <label><b>Username</b></label>
    </td>
        <td>
        <input onChange={(e)=>handleChange(e)} className='inpt' type="text" name="userName" id=""/>
    </td>

    </tr>

        
    
    <tr>
     <td>
    <label><b> Password </b></label>
    </td>
    <td>
        <input onChange={(e)=>handleChange(e)} className='inpt' type="password" name="password" id=""/>
    </td>
    
    </tr>


    <tr> 
        
        <td>
        Contact:
        </td>  
       <td>
       <input onChange={(e)=>handleChange(e)} className='inpt' type="text" name="contact" id=""/>

        </td> 
        
        </tr>


    <tr>
      <td>Image: </td>
      
      
      <td>
      <div style={{fontSize:"15px"}}>

<FileBase64 
multiple={false}
onDone={({base64})=>setUserData({...userData,userImage:base64})}
/>

</div>

     </td>  
    
    
    
    </tr>
    </table>
    
    

     <Link to='/main'><button  className="btn1" onClick={(e)=>userAddition(e)}> Signup </button></Link>
     <p style={{paddingTop:"10px"}}>Continue To <Link to='/login'>Login</Link></p>

{/* <div style={{marginTop:"20px"}}>
<Appcontext.Provider value={{username}}>
     <User/>
</Appcontext.Provider>
</div> */}
     
    </div>
    


   

        </div>
        
        </form>
        
    )
     
};
export default Signup;
